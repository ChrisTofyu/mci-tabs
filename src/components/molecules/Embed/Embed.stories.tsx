import React from 'react';
import { Embed } from './Embed';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Library/Molecules/Embed',
  component: Embed,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div
        style={{ width: '100vw', height: '100vh', backgroundColor: 'white' }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    src: {
      description: 'src of the embed',
      control: { type: 'text' },
    },
    size: {
      description: 'Size of the embed',
      control: 'select',
      options: ['1', '2', '3'],
    },
    className: {
      description: 'Additional class name for the embed',
      control: { type: 'text' },
    },
  },
  args: {
    size: '1',
  },
} satisfies Meta<typeof Embed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const embed: Story = {
  args: {
    src: 'https://widget.tagembed.com/2169275',
  },
};
