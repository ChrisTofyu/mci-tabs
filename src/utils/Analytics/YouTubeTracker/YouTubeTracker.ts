import { AdobeEvent } from '@internal/types/common';
import { useRef } from 'react';

type CuePoint = 25 | 50 | 75;

export enum PlayerState {
  UNSTARTED = -1,
  ENDED = 0,
  PLAYING = 1,
  PAUSED = 2,
  BUFFERING = 3,
  CUED = 5,
}

interface Player {
  playerInfo: {
    videoData: {
      video_id: string;
    };
    currentTime: number;
    duration: number;
    videoUrl: string;
  };
  videoTitle: string;
  lastPlay: number;
  isVideoPlaying: boolean;
  isStarted: boolean;
  pauseVideo: () => void;
}

interface PlayerEvent {
  target: Player;
}

interface OnStateChangeEvent {
  data: PlayerState;
  target: Player;
}

declare global {
  interface Window {
    YT: {
      Player: new (id: string, options: unknown) => Player;
      PlayerState: typeof PlayerState;
      metaData?: {
        [key: string]: {
          videoTitle: string;
          videoId: string;
          mediaLength: number;
          mediaOffset: number;
          videoURL: string;
        };
      };
    };
    onYouTubeIframeAPIReady: () => void;
    adobeDataLayer?: AdobeEvent[];
  }
}

export const YouTubeTracker = () => {
  const cuePoints: CuePoint[] = [25, 50, 75];
  const playerInfoList: string[] = [];
  const customCueTrigger = useRef<string[]>([]);
  const intervalRef = useRef<Map<string, ReturnType<typeof setInterval>>>(
    new Map()
  );
  const playerInstances = useRef<Map<string, Player>>(new Map());

  const addQSParm = (curURL: string, name: string, value: string): string => {
    const re = new RegExp(`([?&]${name}=)[^&]+`);
    if (curURL.indexOf('?') === -1) return `${curURL}?${name}=${value}`;
    return re.test(curURL)
      ? curURL.replace(re, `$1${value}`)
      : `${curURL}&${name}=${value}`;
  };

  const init = () => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }
  };
  const load = () => {
    const iFrames = document.querySelectorAll<HTMLIFrameElement>(
      'iframe[src*="youtube"]'
    );
    iFrames.forEach((iframe, index) => {
      const currentSrc = iframe.src;
      const hasEnableJsApi = currentSrc.includes('enablejsapi=1');
      const hasRelZero = currentSrc.includes('rel=0');

      let newSrc = currentSrc;
      if (!hasEnableJsApi) newSrc = addQSParm(newSrc, 'enablejsapi', '1');
      if (!hasRelZero) newSrc = addQSParm(newSrc, 'rel', '0');

      if (newSrc !== currentSrc) iframe.src = newSrc;
      iframe.id = `player${index + 1}`;
      if (!playerInfoList.includes(iframe.id)) {
        playerInfoList.push(iframe.id);
      }
    });
    if (playerInfoList.length > 0) {
      initializePlayers(playerInfoList);
    }
  };

  const initializePlayers = (playerIds: string[]) => {
    if (!window?.YT?.Player) return;

    playerIds.forEach(id => {
      const player = new window.YT.Player(id, {
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });

      // Add after construction
      player.lastPlay = 0;
      player.isVideoPlaying = false;
      player.isStarted = false;
    });
  };

  const pauseAllExcept = (currentVideoId: string) => {
    playerInstances.current.forEach((player, videoId) => {
      if (videoId !== currentVideoId) {
        player.pauseVideo();
        player.isVideoPlaying = false;
        clearTimer(videoId);
      }
    });
  };

  const startTracking = (player: Player) => {
    const videoId = player.playerInfo.videoData.video_id;
    if (!intervalRef.current.get(videoId)) {
      intervalRef.current.set(
        videoId,
        setInterval(() => trackProgress(player), 1000)
      );
    }
  };

  const trackProgress = (player: Player) => {
    const current = Math.floor(player.playerInfo.currentTime);
    const duration = Math.floor(player.playerInfo.duration);
    const videoId = player.playerInfo.videoData.video_id;
    const meta = window.YT.metaData?.[videoId];

    if (!meta) return;

    cuePoints.forEach(cue => {
      const cueTime = Math.floor(duration * (cue / 100));
      if (
        player.isVideoPlaying &&
        current >= cueTime &&
        !customCueTrigger.current.includes(`${videoId}|${cue}`)
      ) {
        if (meta.mediaOffset > 1 && !player.isStarted) {
          player.isStarted = true;
          push('videostart', 'video start', videoId);
        }
        customCueTrigger.current.push(`${videoId}|${cue}`);
        setGlobalVariables(player);
        push(`video${cue}`, `video ${cue}%`, videoId);
      }
    });
  };

  const onPlayerReady = (event: PlayerEvent) => {
    const player = event.target;
    const videoId = player.playerInfo.videoData.video_id;
    // Make sure videoId is available before adding
    if (videoId) {
      playerInstances.current.set(videoId, player);
    }

    setGlobalVariables(player);
  };

  const onPlayerStateChange = (event: OnStateChangeEvent) => {
    setGlobalVariables(event.target);
    const player = event.target;
    const videoId = player.playerInfo.videoData.video_id;
    const meta = window.YT.metaData?.[videoId];
    if (!meta) return;

    switch (event.data) {
      case PlayerState.PLAYING: {
        pauseAllExcept(videoId);
        player.isVideoPlaying = true;

        if (meta.mediaOffset === 0 && !player.isStarted) {
          player.isStarted = true;
          customCueTrigger.current = customCueTrigger.current.filter(
            cue => !cue.startsWith(meta.videoId)
          );
          push('videostart', 'video start', videoId);
        }

        startTracking(player);
        break;
      }
      case PlayerState.PAUSED:
        player.isVideoPlaying = false;
        clearTimer(videoId);
        break;
      case PlayerState.ENDED:
        player.isVideoPlaying = false;
        player.isStarted = false;
        clearTimer(videoId);
        push('videocomplete', 'video complete', videoId);
        break;
      case PlayerState.BUFFERING:
        startTracking(player);
        break;
      default:
        break;
    }
  };

  const setGlobalVariables = (player: Player) => {
    const videoId = player.playerInfo.videoData.video_id;
    if (!window.YT.metaData) window.YT.metaData = {};

    window.YT.metaData[videoId] = {
      videoTitle: player.videoTitle,
      videoId: player.playerInfo.videoData.video_id,
      mediaLength: Math.floor(player.playerInfo.duration),
      mediaOffset: Math.floor(player.playerInfo.currentTime),
      videoURL: player.playerInfo.videoUrl,
    };
  };

  const push = (event: string, event_details: string, id: string) => {
    if (!window.adobeDataLayer) window.adobeDataLayer = [];
    const meta = window.YT.metaData?.[id];
    if (!meta) return;

    window.adobeDataLayer.push({
      event,
      event_details,
      video: {
        video_duration: meta.mediaLength,
        video_id: meta.videoId,
        video_name: meta.videoTitle,
        video_url: meta.videoURL,
        video_source: 'YouTube',
      },
      page: {
        page_url: window.location.href,
      },
    });
  };

  const clearTimer = (videoId: string) => {
    const interval = intervalRef.current.get(videoId);
    if (interval) {
      clearInterval(interval);
      intervalRef.current.delete(videoId);
    }
  };

  return { init, load };
};

export default YouTubeTracker;
