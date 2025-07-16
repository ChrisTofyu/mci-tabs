import React, { ReactElement } from 'react';
import { Flex as RadixFlex, FlexProps as Props } from '@radix-ui/themes';

/**
 * @interface
 * The Flex props type of {@link Flex}
 *
 * @property {Props} props - The props of the Flex component
 */
export type FlexProps = Props;

/**
 * Flex component is to apply the flex style/layout to the children.
 *
 * @group Atoms
 * @category Radix Component
 *
 * @param {FlexProps} props - The Flex props
 * @returns {ReactElement} - Flex Component
 */
export const Flex = ({ children, ...props }: FlexProps): ReactElement => {
  return <RadixFlex {...props}>{children}</RadixFlex>;
};

export default Flex;
