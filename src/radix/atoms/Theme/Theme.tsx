import React from 'react';
import { Theme as RadixTheme } from '@radix-ui/themes';
import type { ThemeProps as RadixThemeProps } from '@radix-ui/themes';

export type ThemeProps = RadixThemeProps;

export const Theme: React.ForwardRefExoticComponent<
  RadixThemeProps & React.RefAttributes<HTMLDivElement>
> = RadixTheme;

export default Theme;
