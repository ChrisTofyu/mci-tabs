import React from 'react';
import { Card as RadixCard, CardProps as Props } from '@radix-ui/themes';

/**
 * @interface
 * The Card props type of {@link Card}
 *
 * @property {Props} props - The props of the Card component
 */
export type CardProps = Props;

/**
 *
 * Card component to display the card with required information such as text, icon, and avatar in different layout.
 *
 * @group Atoms
 * @category Radix Component
 *
 * @param {CardProps} props - The Card props
 * @returns {ReactElement} - Card Component
 *
 */
export const Card = ({ children, ...props }: Props) => {
  return <RadixCard {...props}>{children}</RadixCard>;
};

export default Card;
