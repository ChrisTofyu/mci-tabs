import React from 'react';
import { classNames } from '@utils/common/classNames';
import { Link, LinkProps } from '@radix-styles/atoms/Link';

export interface IconProps {
  name: string;
  size?: string;
  iconWidth?: string;
  iconHeight?: string;
  color?: string;
  className?: string;
  backgroundColor?: string;
  backgroundSize?: string;
  backgroundPadding?: string;
  rounded?: boolean;
  style?: React.CSSProperties;
  link?: LinkProps;
  onClick?: () => void;
}
export const Icon = ({
  name,
  size,
  iconWidth,
  iconHeight,
  color,
  className,
  backgroundColor,
  backgroundSize,
  backgroundPadding,
  rounded,
  style,
  link,
  onClick,
}: IconProps) => {
  const linkProps =
    typeof link === 'object' && !(link instanceof Array)
      ? link
      : { ignoreHref: true };
  const sizeStyle = size && `${size}px`;
  return (
    <Link {...linkProps}>
      <span
        className={className}
        style={{
          background: backgroundColor,
          borderRadius: rounded ? '50%' : '0',
          width: backgroundSize,
          height: backgroundSize,
          padding: backgroundPadding,
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
          ...style,
        }}
        onClick={onClick}
      >
        <span
          className={classNames('icon', name)}
          style={{
            width: iconWidth ? `${iconWidth}px` : sizeStyle,
            height: iconHeight ? `${iconHeight}px` : sizeStyle,
            color: color,
          }}
        ></span>
      </span>
    </Link>
  );
};

export interface IconDisplayProps {
  icons: string[];
}

export default Icon;
