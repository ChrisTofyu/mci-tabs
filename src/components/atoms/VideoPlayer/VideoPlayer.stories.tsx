import type { Decorator, Meta, StoryObj } from '@storybook/react';
import VideoPlayer from '@components/atoms/VideoPlayer';
import React from 'react';
import { Theme } from '@radix-ui/themes';

const Decorators: Decorator = Story => (
  <Theme>
    <Story />
  </Theme>
);
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Library/Atoms/VideoPlayer',
  component: VideoPlayer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    src: {
      description: 'Source URL for the video',
      control: { type: 'text' },
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['lg', 'md', 'sm', 'none'],
    },
    width: {
      description: 'Width of the video',
      control: { type: 'text' },
    },
    height: {
      description: 'Height of the video',
      control: { type: 'text' },
    },
    thumbnail: {
      description: 'Thumbnail image for the video',
      control: { type: 'text' },
    },
    containerClassName: {
      description: 'Class name for the video container',
      control: { type: 'text' },
    },
    videoPlayerContainerClassName: {
      description: 'Class name for the video player container',
      control: { type: 'text' },
    },
    videoThumbnailContainerClassName: {
      description: 'Class name for the video thumbnail container',
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
    size: 'none',
  },
  decorators: Decorators,
} satisfies Meta<typeof VideoPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const YoutubeVideo: Story = {
  args: {
    src: 'https://www.youtube.com/embed/J2ogs029GVg?si=GRnGAS3WvToc-CXL',
  },
};

export const VideoSourceStory: Story = {
  args: {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
};
