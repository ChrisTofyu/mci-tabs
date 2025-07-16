import React, { ReactElement, useEffect, useRef, useState } from 'react';

import Button from '@radix-styles/atoms/Button';
import { classNames } from '@utils/common/classNames';

import { ImageSlide } from './components/ImageSlide';

import styles from './ImageCarousel.module.scss';
import { AnalyticsHandler } from '@utils/Analytics';

export interface SlideProp {
  /**
   * Image source for the slide
   * @property
   */
  src: string;
  /**
   * Tooltip for the slide, if exists
   * @property
   */
  tooltip?: string;
  /**
   * Tooltip title for the slide, if exists
   * @property
   */
  tooltipTitle?: string;
}

export interface ImageCarouselProps {
  /**
   * List of slides to display
   * @property
   */
  slides: SlideProp[];
  /**
   * Carousel mode normal or thumbnail view
   * @property
   */
  mode?: 'default' | 'thumbnail';
  /**
   * Maximum width of the carousel
   * @property
   * @default '100%'
   */
  maxWidth?: string;
}

export const ImageCarousel = ({
  slides = [],
  mode = 'default',
  maxWidth,
}: ImageCarouselProps): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { trackClick } = AnalyticsHandler();

  const slidesLength = slides.length;
  const next = active === slidesLength ? 1 : active + 1;
  const previous = active === 1 ? slidesLength : active - 1;

  const goToActive = (index: number) => {
    const element = document.scrollingElement ?? document.body;
    const y = element.scrollTop;
    const x = element.scrollLeft;
    document.getElementById('slide-' + index)?.scrollIntoView({
      behavior: 'auto',
      block: 'nearest',
      inline: 'center',
    });
    element.scrollTo(x, y);
  };

  useEffect(() => {
    goToActive(active);
  }, [active]);

  useEffect(() => {
    setActive(1);
    const resizeObserver = new ResizeObserver(() => {
      goToActive(1);
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    // handle keyboard events. TODO - Need to support the enter & space for respective buttons
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === 'ArrowRight') {
        setActive(next);
      } else if (event.key === 'ArrowLeft') {
        setActive(previous);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [active]);

  // Extra slide for Edge Preview of the first and last slide
  const firstSlide = slides.slice(slides.length - 1)[0];
  const lastSlide = slides.slice(0, 1)[0];

  // mini thumbnail slider
  const thumbnailMode = mode === 'thumbnail';
  const defaultMode = !thumbnailMode;
  const thumbnail = thumbnailMode ? styles.thumbnailMode : null;
  const previousButtonName = 'Carousel Previous Button';
  const nextButtonName = 'Carousel Next Button';

  const track = (name: string, index: number) => {
    trackClick({
      name: name,
      contentTypeOrPosition: index.toString(),
      type: 'carousel',
      eventDetails: 'carousel click',
    });
  };
  const previousButtonClick = () => {
    setActive(previous);
    track(previousButtonName, previous);
  };
  const nextButtonClick = () => {
    setActive(next);
    track(nextButtonName, next);
  };

  return (
    <div ref={ref} className={styles.container} style={{ maxWidth }}>
      <div className={classNames(styles.previous, thumbnail)}>
        {defaultMode ? (
          <Button
            ariaLabelName={previousButtonName}
            mode="tertiary"
            size="xl"
            icon="icon-chevron-left"
            onPointerDown={previousButtonClick}
          />
        ) : (
          <Button
            ariaLabelName={previousButtonName}
            mode="tertiary"
            size="sm"
            icon="icon-chevron-left"
            rounded
            onPointerDown={previousButtonClick}
          />
        )}
      </div>
      <div className={styles.slider}>
        <div className={styles.slides}>
          <ImageSlide
            index={0}
            {...firstSlide}
            styles={styles}
            thumbnailMode={thumbnailMode}
          />
          {slides.map((slide, index) => (
            <ImageSlide
              key={slide.src + '-' + index}
              index={index + 1}
              {...slide}
              styles={styles}
              thumbnailMode={thumbnailMode}
            />
          ))}
          <ImageSlide
            index={slidesLength + 1}
            {...lastSlide}
            styles={styles}
            thumbnailMode={thumbnailMode}
          />
        </div>
      </div>
      <div className={classNames(styles.next, thumbnail)}>
        {defaultMode ? (
          <Button
            ariaLabelName={nextButtonName}
            mode="tertiary"
            size="xl"
            icon="icon-chevron-right"
            onPointerDown={nextButtonClick}
          />
        ) : (
          <Button
            ariaLabelName={nextButtonName}
            mode="tertiary"
            size="sm"
            icon="icon-chevron-right"
            rounded
            onPointerDown={nextButtonClick}
          />
        )}
      </div>
      {defaultMode && (
        <div className={styles.page}>
          {active}/{slidesLength}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
