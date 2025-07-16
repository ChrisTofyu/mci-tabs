import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';
import { Theme } from '@radix-ui/themes';

const meta: Meta<typeof Text> = {
  title: 'Library/Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      control: {
        type: 'object',
      },
    },
    weight: {
      control: {
        type: 'object',
      },
    },
    className: {
      control: 'text',
    },
  },
  args: {
    children: 'Sample Text',
    size: '3',
    weight: 'regular',
    as: 'span',
  },
};

export default meta;

type Story = StoryObj<TextProps>;

export const BreakPointVariantText: Story = {
  args: {
    size: { initial: '1', xs: '2', sm: '3', md: '4', lg: '4', xl: '6' },
    weight: { initial: 'regular', sm: 'semibold', md: 'bold' },
    children: 'Custom Text with Breakpoint Variant Styles',
    className: 'custom-class',
  },
};
