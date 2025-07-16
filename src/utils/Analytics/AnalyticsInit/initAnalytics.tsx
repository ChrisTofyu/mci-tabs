import { AdobeEvent, payloadProps } from '@internal/types/common';
import localStorageUtil from '@utils/localStorage';

declare global {
  interface Window {
    _scrollTracker?: {
      callback: () => void;
      interval?: number;
      percent?: Record<number, boolean>;
    };
    adobeDataLayer?: AdobeEvent[];
  }
}

export const initAnalytics = (pageName: string) => {
  const { setlocalStorage } = localStorageUtil();

  // Read storage values once
  const globalname = pageName;
  const pageurl = window.location.href;
  setlocalStorage({ globalname: globalname, pageurl: pageurl });
  const referer = document.referrer;
  if (!referer && !window.adobeDataLayer) {
    setlocalStorage({
      previouspagename: '',
      prevpageURL: '',
      p_pagename: globalname,
      CurrentpageURl: pageurl,
    });
  } else {
    const p_pagename = localStorage.getItem('p_pagename') || '';
    if (p_pagename !== globalname) {
      const CurrentpageURl = localStorage.getItem('CurrentpageURl') || '';
      setlocalStorage({
        previouspagename: p_pagename,
        prevpageURL: CurrentpageURl,
        p_pagename: globalname,
        CurrentpageURl: pageurl,
      });
    }
  }

  if (!window._scrollTracker) {
    window._scrollTracker = {
      callback: function () {
        try {
          let h = document.documentElement,
            b = document.body,
            st: keyof HTMLElement = 'scrollTop',
            sh: keyof HTMLElement = 'scrollHeight',
            p = 0,
            pv: number = 0;
          this.percent = this.percent || {};
          p = Math.round(
            ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
          );
          pv = (p >= 50 && !this.percent[50] && 50) || pv;
          pv = (p >= 75 && !this.percent[75] && 75) || pv;
          if (pv) {
            this.percent[pv] = true;
            if (!window.adobeDataLayer) {
              window.adobeDataLayer = [];
            }

            const eventData: AdobeEvent | payloadProps = {
              event: 'pagescroll',
              event_details: 'page scroll',
              scroll: {
                percentage: pv.toString(),
              },
            };
            window.adobeDataLayer.push(eventData);
          }
          if (this.percent[50] && this.percent[75]) {
            window.clearInterval(window._scrollTracker?.interval);
          }
        } catch (e) {
          console.error('Analytics error ', e);
        }
      },
    };
    try {
      window._scrollTracker.interval = window.setInterval(
        window._scrollTracker.callback,
        250
      );
    } catch (e) {
      console.log('Analytics error ', e);
    }
  }
};
