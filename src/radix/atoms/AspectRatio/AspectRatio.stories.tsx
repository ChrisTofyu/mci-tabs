import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Theme from '@radix-styles/atoms/Theme';
import AspectRatio from './AspectRatio';

const meta = {
  title: 'Library/Atoms/AspectRatio',
  component: AspectRatio,
  decorators: [
    Story => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: {
        type: 'select',
      },
      options: ['1:1', '2:3', '3:2', '3:4', '4:3', '9:16', '16:9', 'none'],
    },
    children: {
      control: 'object',
    },
    classname: {
      control: 'text',
    },
  },
  args: {
    ratio: '1:1',
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const image: Story = {
  args: {
    children: (
      <img
        src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
        alt="Alt text"
        style={{ width: '100%', height: '100%' }}
      />
    ),
  },
};
