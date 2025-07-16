import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import { Theme } from '@radix-ui/themes';

const meta = {
  title: 'Library/Molecules/Avatar',
  component: Avatar,
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
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    src: {
      control: 'text',
    },
    textFallback: {
      control: 'text',
    },
    backgroundColor: {
      control: 'color',
    },
    textColor: {
      control: 'color',
    },
    radius: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large', 'full'],
    },
    fallback: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarWithProfile: Story = {
  args: {
    size: '2',
    src: 'https://www.gstatic.com/webp/gallery/1.jpg',
    backgroundColor: '#E86100',
    textColor: '#fff',
    radius: 'full',
    textFallback: 'WV',
    fallback: 'icon-user',
  },
};

export const AvatarWithInitialsAccent: Story = {
  args: {
    size: '2',
    backgroundColor: '#E86100',
    textColor: '#fff',
    radius: 'full',
    textFallback: 'WV',
    fallback: '',
  },
};

export const AvatarWithIconAccent: Story = {
  args: {
    size: '2',
    backgroundColor: '#E86100',
    textColor: '#fff',
    radius: 'full',
    textFallback: '',
    fallback: 'icon-user',
  },
};

export const AvatarWithIconDefault: Story = {
  args: {
    size: '2',
    backgroundColor: '#F4F5F7',
    textColor: '#65676B',
    radius: 'full',
    textFallback: '',
    fallback: 'icon-user',
  },
};

export const AvatarWithInitialsDefault: Story = {
  args: {
    size: '2',
    backgroundColor: '#F4F5F7',
    textColor: '#65676B',
    radius: 'full',
    textFallback: 'WV',
    fallback: '',
  },
};
