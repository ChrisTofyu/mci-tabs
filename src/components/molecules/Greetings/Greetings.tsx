import React, { ReactElement } from 'react';
import Text from '@radix-styles/atoms/Text';
import { Heading } from '@radix-ui/themes';
import styles from './Greeting.module.scss';
import { classNames } from '@utils/common/classNames';

/**
 * @interface
 * The Greetings props type of {@link Greetings}.
 */
export interface GreetingsProps {
  /**
   * Title of the card to show in the page
   * @property
   */
  title: string;
  /**
   * Contents to show below of the title
   * @property
   */
  content?: string;
  /**
   * Pass it to change the horizontal alignment of content
   * @property
   */
  align?: 'center' | 'left' | 'right';
  /**
   * Pass it to change the minimum width as 360px of content
   * @property
   */
  isCardContainer?: boolean;
}

/**
 * Greetings component
 *
 * @group Molecules
 * @category Component
 *
 * @param {GreetingsProps} props - The Greetings props
 * @returns {ReactElement} - Greetings Component
 */
export const Greetings = ({
  title,
  content,
  align = 'left',
  isCardContainer = false,
}: GreetingsProps): ReactElement => {
  const classes = classNames(
    styles.greetings,
    isCardContainer ? styles.cardContainer : ''
  );
  return (
    <div className={classes}>
      <Heading as="h1" align={align} className={styles.heading}>
        {title}
      </Heading>
      {content ? (
        <Text as="p" className={styles.message}>
          {content}
        </Text>
      ) : (
        ''
      )}
    </div>
  );
};

export default Greetings;
