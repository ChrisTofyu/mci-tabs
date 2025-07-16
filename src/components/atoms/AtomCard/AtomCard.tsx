import React, { ReactElement } from 'react';
import { classNames } from '@utils/common/classNames';
import { getStylesAsCssProperties } from '@utils/common/styles';

import styles from './AtomCard.module.scss';
import { Flex } from '@radix-ui/themes';

/**
 * @interface
 * The Card props type of {@link AtomCard}.
 */
export interface AtomCardProps {
  /**
   * Passing a Children as react element
   * @property
   */
  children?: React.ReactNode;
  /**
   * Size of the card
   * @property
   */
  size?: '1' | '2' | '3';
  /**
   * Additional class name for the card
   * @property
   */
  className?: string;
}

const sizeStyles = {
  1: {
    padding: '80px',
    borderRadius: '32px',
  },
  2: {
    padding: '40px',
    borderRadius: '32px',
  },
  3: {
    padding: '16px',
    borderRadius: '16px',
  },
};

/**
 *
 * @group Atoms
 *
 * @category Component
 *
 * Atom Card component is a wrapper for content with a background and padding.
 * It can be used to create a card-like UI element.
 *
 * @param {AtomCardProps} props - The props for the Card component.
 *
 * @returns {JSX.Element} - The Card component.
 *
 */
export const AtomCard = ({
  size = '2',
  className,
  children,
}: AtomCardProps): ReactElement => {
  const { padding, borderRadius } = sizeStyles[size];
  return (
    <Flex
      display="flex"
      justify="center"
      align="center"
      width="100%"
      height="100%"
      className={classNames(styles.wrapper, className)}
    >
      <Flex
        display="flex"
        justify="center"
        align="center"
        width="100%"
        className={styles.card}
        style={getStylesAsCssProperties({
          '--cardPadding': padding,
          '--cardBorderRadius': borderRadius,
        })}
      >
        <Flex
          display="flex"
          justify="center"
          align="center"
          width="100%"
          className={styles.innerBox}
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AtomCard;
