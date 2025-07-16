import React from 'react';
import { Box as RadixBox, BoxProps as Props } from '@radix-ui/themes';

/**
 * @interface
 * Box Props type of {@link Box}
 */
export type BoxProps = Props;

/**
 * Box component is a primitive layout component that is used to wrap other components.
 * It is used to provide padding, margin, and other layout properties to its children.
 * @param {BoxProps} props - Props for the Box component
 * @returns {React.ReactElement} Box component
 */
export const Box = ({ children, ...props }: BoxProps): React.ReactElement => {
  return <RadixBox {...props}>{children}</RadixBox>;
};

export default Box;
