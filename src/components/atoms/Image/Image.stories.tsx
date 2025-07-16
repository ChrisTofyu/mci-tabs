import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';
import FallbackImage from '@assets/images/FallbackImage.svg';

const meta = {
  title: 'Library/Atoms/Image',
  component: Image,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
    fallbackSrc: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
    minHeight: {
      control: { type: 'text' },
    },
    minWidth: {
      control: { type: 'text' },
    },
    maxHeight: {
      control: { type: 'text' },
    },
    maxWidth: {
      control: { type: 'text' },
    },
    link: {
      control: { type: 'object' },
    },
    aspectRatio: {
      control: {
        type: 'select',
      },
      options: ['1:1', '2:3', '3:2', '3:4', '4:3', '9:16', '16:9', 'none'],
    },
  },
  args: {
    link: { ignoreHref: true },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const image: Story = {
  args: {
    src: 'https://www.gstatic.com/webp/gallery/1.jpg',
    alt: 'dummy alt',
    fallbackSrc: FallbackImage,
    className: '',
    width: '100px',
    height: '100px',
    minHeight: '100px',
    minWidth: '100px',
    maxHeight: '100px',
    maxWidth: '100px',
  },
};

export const imageWithLink: Story = {
  args: {
    src: 'https://www.gstatic.com/webp/gallery/1.jpg',
    alt: 'dummy alt',
    fallbackSrc: FallbackImage,
    className: '',
    width: '100px',
    height: '100px',
    minHeight: '100px',
    minWidth: '100px',
    maxHeight: '100px',
    maxWidth: '100px',
    link: {
      href: 'https://www.google.com/',
      target: '_blank',
    },
  },
};
