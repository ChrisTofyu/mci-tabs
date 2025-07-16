import React, { ReactElement } from 'react';
import Card from '@radix-styles/atoms/Card';
import Flex from '@radix-styles/atoms/Flex';
import { classNames } from '@utils/common/classNames';
import styles from './CardContainer.module.scss';

/**
 * @interface
 * The Card Container props type of {@link CardContainer}.
 */
export interface CardContainerProps {
  /**
   * Children as jsx, react component will show inside the modal
   * @property
   */
  children: React.ReactNode;
  /**
   * An optional class to support the dynamic styles of the card container
   * @property
   */
  className?: string;
  /**
   * An optional class to support the dynamic styles of the container's content
   * @property
   */
  contentClassName?: string;
}

/**
 * This Card Container component is primarily designed for use on the PageCardTemplate,
 * as well as other areas where needed.
 * It included customized styles, such as box-shadow, dynamic paddings, default minimum
 * and maximum widths for the container's content, and a responsive design tailored to specified breakpoints
 *
 * We can utilize a Card Radix Atom component for use in common areas where a card is needed without any customized styles
 *
 * @group Molecules
 * @category Component
 *
 * @param {CardContainerProps} props - The Card Container props
 * @returns {ReactElement} - CardContainer Component
 */

export const CardContainer = ({
  children,
  className,
  contentClassName,
}: CardContainerProps): ReactElement => (
  <Card className={classNames(styles.card, className)}>
    <Flex
      display="flex"
      direction="column"
      className={classNames(styles.templateContent, contentClassName)}
    >
      {children}
    </Flex>
  </Card>
);

export default CardContainer;
