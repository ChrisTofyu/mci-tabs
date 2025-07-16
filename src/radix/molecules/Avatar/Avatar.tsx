import React from 'react';
import { Avatar as RadixAvatar, AvatarProps as Props } from '@radix-ui/themes';
import { classNames, getModuleClasses } from '@utils/common/classNames';
import { getStylesAsCssProperties } from '@utils/common/styles';
import { AvatarSizes } from '@internal/types/common/style';
import Icons from '@components/atoms/Icons';

import './AvatarCustomStyle.scss';
import styles from './Avatar.module.scss';

/**
 * @interface
 * The Avatar props type of {@link Avatar}
 *
 * @property {Props} props - The props of the Avatar component
 */
// export type AvatarProps = Props;

export type AvatarProps = Props & {
  /**
   * The size of the Avatar
   * @property
   */
  size?: AvatarSizes;
  /**
   * The initial fallback text of the Avatar
   * @property
   */
  textFallback?: string;
  /**
   * The Background color of the Avatar
   * @property
   */
  backgroundColor?: string;
  /**
   * The Text color of the Avatar
   * @property
   */
  textColor?: string;
  /**
   * The alt text  of the Avatar
   * @property
   */
  altText?: string;
  /**
     * Callback function triggered when the Avatar is clicked
     @property
    */
  onAvatarClick?: () => void;
};

/**
 *
 * Avatar component to display the Avatar bar.
 *
 * @group Atoms
 * @category Radix Component
 *
 * @param {AvatarProps} props - The Avatar props
 * @returns {ReactElement} - Avatar Component
 *
 */

export const Avatar = ({
  className,
  backgroundColor = '#F4F5F7',
  src,
  fallback = 'icon-user',
  textFallback,
  textColor = '#65676B',
  size = '2',
  radius = 'full',
  altText = 'Avatar',
  onAvatarClick,
  ...props
}: AvatarProps) => {
  const classes = getModuleClasses(className?.trim(), styles);
  const wrapperClass = classNames(
    styles.avatarContainer,
    'avatarContainer',
    classes
  );

  return (
    <RadixAvatar
      className={wrapperClass}
      style={getStylesAsCssProperties({
        '--avatarBackgroundColor': backgroundColor,
        '--avatarTextColor': textColor,
      })}
      size={size}
      src={src}
      radius={radius}
      alt={altText}
      fallback={
        textFallback ? (
          textFallback
        ) : (
          <Icons
            name={fallback as string}
            className={classNames(styles.avatarIcon, 'avatarIcon')}
          />
        )
      }
      onClick={onAvatarClick}
      {...props}
    ></RadixAvatar>
  );
};

export default Avatar;
