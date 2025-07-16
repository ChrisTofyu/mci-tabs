import React, { ReactElement, ReactNode } from 'react';
import Card from '@radix-styles/atoms/Card';
import { classNames } from '@utils/common/classNames';
import styles from './SmallCard.module.scss';

/**
 * @interface
 * The Small Card props type of {@link SmallCard}
 */
export interface SmallCardProps {
  /**
   * Children as jsx, react component will show inside the modal
   * @property
   */
  children: ReactNode;
  /**
   * Determines the size of the Small Card
   * @defaultValue `2`
   * @property
   */
  size?: '1' | '2' | '3';
  /**
   * Controls the visual style of the Small Card
   * @defaultValue `primary`
   * @property
   */
  mode?: 'primary' | 'inverse';
  /**
   * Additional class names for customizing styles
   * @property
   */
  containerClass?: string;
}

/**
 * The Small Card is a structured component that organizes related content
 * and supporting customizable sizes and visual variants as well.
 *
 * @group Molecules
 * @category Component
 *
 * @param {SmallCardProps} props - The Small Card props
 * @returns {ReactElement} - Small Card Component
 *
 */
export const SmallCard = ({
  children,
  containerClass,
  size = '2',
  mode = 'primary',
}: SmallCardProps): ReactElement => {
  return (
    <Card
      className={classNames(
        styles.container,
        styles[`size-${size}`],
        styles[mode],
        containerClass
      )}
    >
      {children}
    </Card>
  );
};

export default SmallCard;
