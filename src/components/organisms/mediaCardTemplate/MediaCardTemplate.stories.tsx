import React from 'react';
import { Theme } from '@radix-ui/themes';
import MediaCardTemplate, {
  MediaCardTemplateProps,
  ImageMediaProps,
  VideoMediaProps,
} from './MediaCardTemplate';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Library/Organisms/MediaCard',
  component: MediaCardTemplate,
  decorators: [
    Story => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    date: { control: 'text' },
    title: { control: 'text' },
    subHead: { control: 'text' },
    videoSrc: { control: 'text' },
    imageSrc: { control: 'text' },
    thumbnail: { control: 'text' },
    imageAltText: { control: 'text' },
    cardClassName: { control: 'text' },
    contentContainerClass: { control: 'text' },
    imageFallbackThumbnailSrc: { control: 'text' },
    mediaType: {
      control: { type: 'select' },
      options: ['video', 'image'],
    },
    imgAspectRatio: {
      control: {
        type: 'select',
      },
      options: ['1:1', '2:3', '3:2', '3:4', '4:3', '9:16', '16:9', 'none'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['1', '2', '3', 'none'],
    },
    isArticle: {
      control: 'boolean',
    },
    id: {
      control: 'text',
    },
  },
  args: {
    date: 'Mar 4, 2025',
    title: 'Video: Burundi schools serve up success one plate at a time',
    subHead:
      'Proin congue lorem sit amet augue feugiat, eu placerat odio interdum. Mauris tincidunt arcu ut justo sollicitudin, eget volutpat magna ultrices. Nam tempus dapibus vehicula. Morbi blandit molestie metus vitae rhoncus. In in turpis sed ante euismod congue. Duis eu risus a nisl dapibus ultricies. Sed ultrices auctor lorem a finibus.',
  },
} satisfies Meta<typeof MediaCardTemplate>;

export default meta;

type Story = StoryObj<MediaCardTemplateProps>;

export const VideoMediaCard: Story = {
  args: {
    mediaType: 'video',
    videoSrc: 'https://www.youtube.com/embed/J2ogs029GVg?si=GRnGAS3WvToc-CXL',
    thumbnail:
      'https://images.pexels.com/photos/2113709/pexels-photo-2113709.jpeg',
  } as VideoMediaProps,
};

export const ImageMediaCard: Story = {
  args: {
    mediaType: 'image',
    imageSrc:
      'https://images.pexels.com/photos/2113709/pexels-photo-2113709.jpeg',
  } as ImageMediaProps,
};

export const ArticleCard: Story = {
  args: {
    mediaType: 'image',
    imageSrc:
      'https://images.pexels.com/photos/2113709/pexels-photo-2113709.jpeg',
    isArticle: true,
    size: '1',
    imgAspectRatio: '1:1',
    id: 'sample-123',
    onClick: id => console.log('cliked', id),
  },
};
