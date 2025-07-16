import React from 'react';
import classNames from 'classnames';

import styles from './Divider.module.scss';

/**
 * Props for the Divider component.
 *
 * @property orientation - Direction of the divider: "horizontal" (default) or "vertical".
 * @property color - Color variant of the divider: "primary", "secondary", or "inverse".
 * @property size - Size of the divider:
 *    1 = 16px,
 *    2 = 32px,
 *    3 = 64px,
 *    4 = fill container (100% width or height depending on orientation).
 */

export type DividerProps = {
  orientation?: 'horizontal' | 'vertical';
  color?: 'primary' | 'secondary' | 'inverse';
  size?: 1 | 2 | 3 | 4; // size: 4 means fill container
};

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  color = 'primary',
  size = 1,
}) => {
  const validOrientations = ['horizontal', 'vertical'];
  const validColors = ['primary', 'secondary', 'inverse'];
  const validSizes = [1, 2, 3, 4];

  const safeOrientation = validOrientations.includes(orientation)
    ? orientation
    : 'horizontal';
  const safeColor = validColors.includes(color) ? color : 'primary';
  const safeSize = validSizes.includes(size) ? size : 1;

  const sizeMap = {
    1: 16,
    2: 32,
    3: 64,
  };

  const isFill = safeSize === 4;

  const dividerClass = classNames(styles.divider, 'divider', {
    [styles[`divider-${safeOrientation}`]]: true,
    [styles[`divider-${safeColor}`]]: true,
    [styles[`divider-size-${safeSize}`]]: !isFill,
    [styles['divider-fill']]: isFill,
  });

  const style: React.CSSProperties = isFill
    ? safeOrientation === 'horizontal'
      ? { width: '100%', minWidth: '128px', height: '1px' }
      : { height: '100%', minHeight: '128px', width: '1px' }
    : safeOrientation === 'horizontal'
      ? { width: sizeMap[safeSize as 1 | 2 | 3], height: '1px' }
      : { height: sizeMap[safeSize as 1 | 2 | 3], width: '1px' };

  return <div role="separator" className={dividerClass} style={style} />;
};

export default Divider;
