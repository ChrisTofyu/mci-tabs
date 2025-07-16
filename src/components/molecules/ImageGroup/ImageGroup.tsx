import React, { ReactElement, useId } from 'react';
import { Image, ImageProps } from '@components/atoms/Image';
import styles from './ImageGroup.module.scss';
import { classNames, getModuleClasses } from '@utils/common/classNames';

export interface ImageGroupProps {
  /**
   * List of image to display in the group
   * @default []
   * @property
   */
  data: Array<ImageProps>;
  /**
   * Class name for image group container
   * @property
   */
  className?: string;
}

export const ImageGroup = ({
  data = [],
  className,
}: ImageGroupProps): ReactElement => {
  const key = useId();
  const classes = getModuleClasses(className?.trim(), styles);
  return (
    <div className={classNames(styles.imageGroupContainer, classes)}>
      {data?.map((props, index) => (
        <Image key={key + '-' + index} {...props} />
      ))}
    </div>
  );
};

export default ImageGroup;
