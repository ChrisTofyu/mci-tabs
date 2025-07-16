import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './ProgressBar';
import { Theme } from '@radix-ui/themes';

const meta = {
  title: 'Library/Atoms/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
  argTypes: {
    size: {
      control: 'text',
    },
    value: {
      control: 'number',
    },
    color: {
      control: 'color',
    },
    variant: {
      control: 'select',
      options: ['classic', 'surface', 'soft'],
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const progressBar: Story = {
  args: {
    size: '3',
    color: 'orange',
    value: 33,
    variant: 'surface',
  },
};
