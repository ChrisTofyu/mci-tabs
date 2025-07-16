import React from 'react';
import { Grid as RadixGrid, GridProps as Props } from '@radix-ui/themes';
import { CommonSizes } from '@internal/types/common/style';
import { classNames, getModuleClasses } from '@utils/common/classNames';
import Flex from '@radix-styles/atoms/Flex/Flex';

import styles from './Grid.module.scss';

/**
 * @interface
 * The Grid props type of {@link Grid}
 *
 * @property {Props} props - The props of the Grid component
 */

export type GridProps = Props & {
  /**
   * The card count for the single row
   * @property
   */
  columns?: CommonSizes;
  /**
   * The gap between the cards
   * @property
   * @defaultValue { initial: '2', xl: '5', lg: '5', md: '4', sm: '2', xs: '2' }
   */
  gap?: CommonSizes;
  /**
   * class name for the grid
   * @property
   */
  className?: string;
};

/**
 *
 * Grid component to display the Cards.
 *
 * @group Molecule
 * @category Radix Component
 *
 * @param {GridProps} props - The Grid props
 * @returns {ReactElement} - Grid Component
 *
 */

export const Grid = ({
  columns,
  gap = { initial: '2', xl: '5', lg: '5', md: '4', sm: '2', xs: '2' },
  className,
  children,
  px = { initial: '4', xl: '9', lg: '9', md: '4', sm: '4', xs: '4' },
  ...props
}: GridProps) => {
  const classes = getModuleClasses(className?.trim(), styles);
  const wrapperClass = classNames(
    styles.gridContainer,
    'gridContainer',
    classes
  );

  return (
    <Flex display="flex" justify="center">
      <RadixGrid
        className={wrapperClass}
        columns={columns}
        gap={gap}
        px={px}
        {...props}
      >
        {children}
      </RadixGrid>
    </Flex>
  );
};

export default Grid;
