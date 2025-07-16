import React, { ReactElement, useState } from 'react';

import Image from '@components/atoms/Image';
import Play from '@assets/icons/core/Play.svg';
import { classNames } from '@utils/common/classNames';
import FallbackImage from '@assets/images/FallbackImage.svg';

import styles from './VideoPlayer.module.scss';
import { getStylesAsCssProperties } from '@utils/common/styles';

const isYouTubeLink = (text: string): boolean => {
  const youtubeRegex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([0-9A-Za-z_-]{11})/;
  return youtubeRegex.test(text);
};

const getSource = (videoId: string = '', attachment: string = '') =>
  `https://www.youtube.com/embed/${videoId}?${attachment}&autoplay=1&mute=1`;

const getVideoId = (url: string = ''): string => {
  const literal = url.lastIndexOf('v=') !== -1 ? 'v=' : '/';
  const videoId = (url.split(literal).pop() ?? '').split('?').shift() ?? '';
  return videoId ?? '';
};

const getYouTubeThumbnail = (videoId: string = ''): string => {
  const ampIndex = videoId.indexOf('&');
  if (ampIndex !== -1) {
    return `https://img.youtube.com/vi/${videoId.substring(0, ampIndex)}/hqdefault.jpg`;
  }
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

export interface VideoPlayerProps {
  /**
   * Source URL for the video, (mainly for youtube videos)
   * @property
   */
  src: string;
  /**
   * Size of the video container
   * @default 'none'
   * @property
   */
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'none';
  /**
   * Width of the video
   * @property
   */
  width?: string;
  /**
   * Height of the video
   * @property
   */
  height?: string;
  /**
   * Thumbnail image for the video
   * @default ''
   * @property
   */
  thumbnail?: string;
  /**
   * Class name for the video thumbnail container
   * @default ''
   * @property
   */
  videoThumbnailContainerClassName?: string;
  /**
   * Class name for the video player container
   * @default ''
   * @property
   */
  videoPlayerContainerClassName?: string;
  /**
   * Class name for the video container
   * @default ''
   * @property
   */
  containerClassName?: string;
  /**
   * Class name for the video screen container
   * @default ''
   * @property
   */
  screenContainerClassName?: string;
  /**
   * Fallback image Source for the video, this is will work if actual video is broken
   * @default FallbackImage
   * @property
   */
  fallbackThumbnailSrc?: string;
}

/**
 * @group Atoms
 * @category Component
 *
 * VideoPlayer component is used to display a video with thumbnail and play button
 * @param {VideoPlayerProps} props
 * @returns {ReactElement}
 */
export const VideoPlayer = ({
  src,
  size = 'none',
  width,
  height,
  thumbnail = '',
  containerClassName,
  screenContainerClassName,
  videoPlayerContainerClassName,
  videoThumbnailContainerClassName,
  fallbackThumbnailSrc = FallbackImage,
}: VideoPlayerProps): ReactElement => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const adaptiveStyle =
    size === 'none'
      ? getStylesAsCssProperties({
          '--videoWidth': width,
          '--videoHeight': height,
        })
      : undefined;

  const videoId = getVideoId(src);
  const generatedThumbnail = () =>
    isYouTubeLink(src) && !isVideoLoaded ? getYouTubeThumbnail(videoId) : '';
  const videoThumbnail =
    thumbnail && thumbnail.trim() !== '' ? thumbnail : generatedThumbnail();
  const attachment = src?.split('?')?.pop() ?? '';
  const source = () => {
    if (!src) {
      return '';
    }
    if (isYouTubeLink(src)) {
      return getSource(videoId, attachment);
    }
    return src;
  };

  const videoSrc = source();
  const disbleVideo = !videoSrc;

  const handleLoadVideo = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>
  ) => {
    if (!disbleVideo) {
      event.preventDefault();
      event.stopPropagation();
      setIsVideoLoaded(true);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const { key } = event;
    const keyPressed =
      !disbleVideo && key !== undefined && (key === 'Enter' || key === ' ');
    if (keyPressed) {
      handleLoadVideo(event);
    }
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLButtonElement>) => {
    const { type } = event;
    const touched = !disbleVideo && type === 'touchend';
    if (touched) {
      handleLoadVideo(event);
    }
  };

  return (
    <div
      className={classNames(styles.videoContainer, containerClassName)}
      style={adaptiveStyle}
    >
      {isVideoLoaded ? (
        <div
          className={classNames(
            styles.embedContainer,
            videoPlayerContainerClassName
          )}
        >
          <iframe
            src={videoSrc}
            title="Video Player"
            className={classNames(styles[size], screenContainerClassName)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div
          className={classNames(
            styles.imageContainer,
            videoThumbnailContainerClassName
          )}
        >
          <button
            onKeyDown={onKeyDown}
            onTouchEnd={onTouchEnd}
            onClick={handleLoadVideo}
            disabled={disbleVideo}
            className={styles.buttonContainer}
          >
            <Image
              className={classNames(styles.playButton, 'button', styles[size])}
              alt="Play Button"
              src={Play}
              fallbackSrc={undefined}
            />
            <Image
              alt="Video Player"
              src={videoThumbnail}
              style={{ width, height }}
              className={classNames(
                styles.videoPlaceholder,
                styles[size],
                screenContainerClassName
              )}
              fallbackSrc={fallbackThumbnailSrc}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
