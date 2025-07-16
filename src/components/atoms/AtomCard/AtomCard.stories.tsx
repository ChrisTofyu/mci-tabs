import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AtomCard from './AtomCard';
import { Theme } from '@radix-ui/themes';

const meta = {
  title: 'Library/Atoms/AtomCard',
  component: AtomCard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <Theme
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'white',
        }}
      >
        <Story />
      </Theme>
    ),
  ],
  argTypes: {
    children: {
      description: 'React JS Children of the card',
      control: { type: 'object' },
    },
    size: {
      description: 'Size of the card?',
      control: 'select',
      options: ['1', '2', '3'],
    },
    className: {
      description: 'className of the card to be passed',
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof AtomCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: '2',
    children: (
      <div
        style={{
          backgroundColor: '#fde6e8',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Card 1
      </div>
    ),
  },
};
