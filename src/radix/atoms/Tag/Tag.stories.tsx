import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tag from '@radix-styles/atoms/Tag';
import { Theme } from '@radix-ui/themes';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-exportF
const meta = {
  title: 'Library/Atoms/Tag',
  component: Tag,
  decorators: [
    Story => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    mode: {
      control: { type: 'select' },
      options: ['default', 'emergency'],
    },
    isClickable: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    showIcon: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    showAvatar: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    iconUrl: {
      control: { type: 'text' },
    },
  },
  // more on args: https://storybook.js.org/docs/writing-stories/args#args-object
  args: {
    mode: 'default',
    isClickable: true,
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const TextOnly: Story = {
  args: {
    text: 'Text only',
    showAvatar: false,
    showIcon: false,
    iconUrl: '',
  },
};

export const IconPlusText: Story = {
  args: {
    showIcon: true,
    text: 'Icon with Text',
    showAvatar: false,
    iconUrl: '',
  },
};

export const AvatarPlusText: Story = {
  args: {
    showAvatar: true,
    text: 'Avatar',
    iconUrl:
      'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
    showIcon: false,
  },
};

export const Emergency: Story = {
  args: {
    mode: 'emergency',
    showIcon: true,
    text: 'Emergency',
    showAvatar: false,
    iconUrl: '',
  },
};
