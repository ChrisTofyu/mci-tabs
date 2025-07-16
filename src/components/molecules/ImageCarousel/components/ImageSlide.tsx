import React from 'react';
import { getStylesAsCssProperties } from '@utils/common/styles';
import Button from '@radix-styles/atoms/Button';
import { classNames } from '@utils/common/classNames';

import type Styles from '*.module.scss';

import { SlideProp } from '../ImageCarousel';

export interface ImageProps extends SlideProp {
  /**
   * Index of the slide
   */
  index: number;
  /**
   * CSS Module styles reference for the component
   */
  styles?: typeof Styles;
  /**
   * is it thumbnail view of the image or not
   */
  thumbnailMode?: boolean;
}

export const ImageSlide = ({
  src,
  index,
  tooltip,
  tooltipTitle,
  styles = {},
  thumbnailMode,
}: ImageProps) => {
  const getSlideClasses = (slide: string) =>
    getStylesAsCssProperties({ '--slide-image': `url(${slide})` });
  const thumbnail = thumbnailMode ? styles.thumbnailMode : null;
  const className = classNames(styles.slide, thumbnail);
  return (
    <>
      <div
        id={'slide-' + index}
        className={className}
        style={getSlideClasses(src)}
      />
      {tooltip && !thumbnailMode && (
        <div className={styles.tooltip}>
          <Button
            icon="icon-info"
            mode="inverse"
            size="sm"
            rounded
            ariaLabelName="Carousel Tooltip"
          />
          <div className={styles.tooltipText}>
            {tooltipTitle ? <h5>{tooltipTitle}</h5> : null}
            <p>{tooltip}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageSlide;
