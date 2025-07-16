import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';
import { Theme } from '@radix-ui/themes';

const meta = {
  title: 'Library/Atoms/Heading',
  component: Heading,
  parameters: {
    layout: 'center',
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
    color: {
      control: 'color',
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BreakPointVariantHeading: Story = {
  args: {
    children: 'Custom Sub Heading Text with Breakpoint Variant Styles',
    as: 'h2',
    size: { initial: '8', xs: '9', sm: '10', md: '11', lg: '12', xl: '13' },
    weight: { initial: 'regular', sm: 'semibold', md: 'bold' },
    className: 'custom-class',
  },
};
