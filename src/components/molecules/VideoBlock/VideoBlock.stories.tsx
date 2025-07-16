import type { Decorator, Meta, StoryObj } from '@storybook/react';
import VideoBlock from '@components/molecules/VideoBlock';
import React from 'react';
import { Theme } from '@radix-ui/themes';

const styles = {
  width: '100%',
  height: '100%',
};

const Decorators: Decorator = Story => (
  <div style={styles}>
    <Theme>
      <Story />
    </Theme>
  </div>
);
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Library/Molecules/VideoBlock',
  component: VideoBlock,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
    backgroundColor: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
    size: {
      options: ['xl', 'lg', 'md', 'sm', 'none'],
      control: { type: 'select' },
    },
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
    thumbnail: {
      control: { type: 'text' },
    },
    containerClassName: {
      control: { type: 'text' },
    },
    videoPlayerContainerClassName: {
      control: { type: 'text' },
    },
    videoThumbnailContainerClassName: {
      control: { type: 'text' },
    },
    playerContainerClassName: {
      control: { type: 'text' },
    },
    screenContainerClassName: {
      control: { type: 'text' },
    },
    fallbackThumbnailSrc: {
      control: { type: 'text' },
    },
  },
  args: {
    backgroundColor: 'tertiary',
    size: 'none',
  },
  decorators: Decorators,
} satisfies Meta<typeof VideoBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    src: 'https://www.youtube.com/embed/J2ogs029GVg?si=GRnGAS3WvToc-CXL',
    title: 'Video title with 60 characters maximum',
  },
};

export const WithoutTitle: Story = {
  args: {
    src: 'https://www.youtube.com/embed/J2ogs029GVg?si=GRnGAS3WvToc-CXL',
    backgroundColor: 'primary',
    size: 'none',
  },
};
