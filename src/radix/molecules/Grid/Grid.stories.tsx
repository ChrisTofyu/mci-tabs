import React from 'react';
import Grid from './Grid';
import { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@radix-ui/themes';
import MediaCardTemplate from '@components/organisms/mediaCardTemplate';

const meta = {
  title: 'Library/Molecules/Grid',
  component: Grid,
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
    columns: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    gap: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

const TextAndImageContent = () => (
  <>
    <MediaCardTemplate
      date="Mar 4, 2025"
      id="sample-123"
      imageSrc="https://images.pexels.com/photos/2113709/pexels-photo-2113709.jpeg"
      imgAspectRatio="1:1"
      isArticle
      mediaType="image"
      onClick={() => {}}
      size="1"
      subHead="Proin congue lorem sit amet augue feugiat, eu placerat odio interdum. Mauris tincidunt arcu ut justo sollicitudin, eget volutpat magna ultrices. Nam tempus dapibus vehicula. Morbi blandit molestie metus vitae rhoncus. In in turpis sed ante euismod congue. Duis eu risus a nisl dapibus ultricies. Sed ultrices auctor lorem a finibus."
      title="Video: Burundi schools serve up success one plate at a time"
    />
    <MediaCardTemplate
      date="Mar 4, 2025"
      id="sample-123"
      imageSrc="https://images.pexels.com/photos/2113709/pexels-photo-2113709.jpeg"
      imgAspectRatio="1:1"
      isArticle
      mediaType="image"
      onClick={() => {}}
      size="1"
      subHead="Proin congue lorem sit amet augue feugiat, eu placerat odio interdum. Mauris tincidunt arcu ut justo sollicitudin, eget volutpat magna ultrices. Nam tempus dapibus vehicula. Morbi blandit molestie metus vitae rhoncus. In in turpis sed ante euismod congue. Duis eu risus a nisl dapibus ultricies. Sed ultrices auctor lorem a finibus."
      title="Video: Burundi schools serve up success one plate at a time"
    />
    <MediaCardTemplate
      date="Mar 4, 2025"
      id="sample-123"
      imageSrc="https://images.pexels.com/photos/2113709/pexels-photo-2113709.jpeg"
      imgAspectRatio="1:1"
      isArticle
      mediaType="image"
      onClick={() => {}}
      size="1"
      subHead="Proin congue lorem sit amet augue feugiat, eu placerat odio interdum. Mauris tincidunt arcu ut justo sollicitudin, eget volutpat magna ultrices. Nam tempus dapibus vehicula. Morbi blandit molestie metus vitae rhoncus. In in turpis sed ante euismod congue. Duis eu risus a nisl dapibus ultricies. Sed ultrices auctor lorem a finibus."
      title="Video: Burundi schools serve up success one plate at a time"
    />
    <MediaCardTemplate
      date="Mar 4, 2025"
      id="sample-123"
      imageSrc="https://images.pexels.com/photos/2113709/pexels-photo-2113709.jpeg"
      imgAspectRatio="1:1"
      isArticle
      mediaType="image"
      onClick={() => {}}
      size="1"
      subHead="Proin congue lorem sit amet augue feugiat, eu placerat odio interdum. Mauris tincidunt arcu ut justo sollicitudin, eget volutpat magna ultrices. Nam tempus dapibus vehicula. Morbi blandit molestie metus vitae rhoncus. In in turpis sed ante euismod congue. Duis eu risus a nisl dapibus ultricies. Sed ultrices auctor lorem a finibus."
      title="Video: Burundi schools serve up success one plate at a time"
    />
  </>
);

export const CardGrid: Story = {
  args: {
    children: (
      <div style={{ padding: '20px 0' }}>
        <Grid
          columns={{ initial: '1', lg: '3', md: '2', sm: '2', xs: '1' }}
          gap={{ initial: '4', lg: '4', md: '3', sm: '4', xs: '4' }}
        >
          <TextAndImageContent />
        </Grid>
      </div>
    ),
  },
} as never;
