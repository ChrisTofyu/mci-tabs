import React, { useEffect, useState } from 'react';
import { Skeleton } from '@radix-ui/themes';
import { classNames, getModuleClasses } from '@utils/common/classNames';
import { getStylesAsCssProperties } from '@utils/common/styles';
import { Link, LinkProps } from '@radix-styles/atoms/Link';
import AspectRatio, {
  AspectRatioType,
} from '@radix-styles/atoms/AspectRatio/AspectRatio';

import styles from './Image.module.scss';

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  /**
   * Source for the image, if the image source is not there then the image component will not load
   * @property
   */
  src: string | undefined;
  /**
   * Alternate text for the image
   * @property
   */
  alt: string | undefined;
  /**
   * Fallback image Source for the image, this is will work if actual image is broken
   * @property
   */
  fallbackSrc: string | undefined;
  /**
   * Class name for the image
   * @property
   */
  className?: string;
  /**
   * Width for the image
   * @property
   */
  width?: string;
  /**
   * Height for the image
   * @property
   */
  height?: string;
  /**
   * Minimum Height for the image
   * @property
   */
  minHeight?: string;
  /**
   * Minimum Width for the image
   * @property
   */
  minWidth?: string;
  /**
   * Maximum Height for the image
   * @property
   */
  maxHeight?: string;
  /**
   * Maximum Width for the image
   * @property
   */
  maxWidth?: string;
  /**
   * Link for the image
   * @property
   */
  link?: LinkProps;
  /**
   * Icon for the image, this will be used if the image source is not there
   * @property
   */
  icon?: string;
  /**
   * The aspect ratio to maintain (width / height)
   * For example, 16 / 9 or 4 / 3
   */
  aspectRatio?: AspectRatioType;
}

export const Image = ({
  src,
  alt,
  fallbackSrc,
  className,
  width,
  height,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
  link,
  icon,
  aspectRatio,
  ...props
}: ImageProps) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [loading, setLoading] = useState(false);

  const iconClassName = icon ? `icon ${icon}` : '';
  className = classNames(iconClassName, className);
  const classes = getModuleClasses(className?.trim(), styles);
  const linkProps =
    typeof link === 'object' && !(link instanceof Array)
      ? link
      : { ignoreHref: true };

  const handleError = () => {
    setImgSrc(fallbackSrc);
    setLoading(false);
  };

  const onLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  useEffect(() => {
    setLoading(true);
  }, [imgSrc]);

  if (!src && !icon) {
    return null;
  }

  const hasRatio = aspectRatio && aspectRatio !== 'none';

  return (
    <Link {...linkProps}>
      <Skeleton loading={loading}>
        <AspectRatio ratio={aspectRatio}>
          <img
            src={imgSrc}
            alt={alt}
            onError={handleError}
            onLoad={onLoad}
            className={classNames(styles.imgWrapper, classes)}
            style={getStylesAsCssProperties({
              '--imgWidth': hasRatio ? '100%' : width,
              '--imgHeight': hasRatio ? '100%' : height,
              '--imgMinHeight': minHeight,
              '--imgMinWidth': minWidth,
              '--imgMaxHeight': maxHeight,
              '--imgMaxWidth': maxWidth,
            })}
            {...props}
          />
        </AspectRatio>
      </Skeleton>
    </Link>
  );
};

export default Image;
