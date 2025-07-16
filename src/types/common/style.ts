import { Responsive } from '@radix-ui/themes/dist/cjs/props/prop-def';

export type ResponsiveValue<T> = T | Responsive<T> | null;

export const FontSize = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
] as const;

export const AvatarSize = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
] as const;

export const CommonSize = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
] as const;

type SizeValues = (typeof FontSize)[number];
type AvatarSizeValues = (typeof AvatarSize)[number];
type CommonSizeValues = (typeof CommonSize)[number];

export type TextSize = ResponsiveValue<SizeValues>;
export type AvatarSizes = ResponsiveValue<AvatarSizeValues>;
export type CommonSizes = ResponsiveValue<CommonSizeValues>;

export const FontWeight = ['regular', 'semibold', 'bold'] as const;

export type TextWeight = ResponsiveValue<(typeof FontWeight)[number]>;
