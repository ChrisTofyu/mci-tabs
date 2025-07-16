import React from 'react';
import ImageGroup from './ImageGroup';
import { Meta, StoryObj } from '@storybook/react/*';
import AccreditedMember from '@assets/icons/logo/AccreditedMember.svg';
import BBB from '@assets/icons/logo/bbb.svg';
import ImagineCanada from '@assets/icons/logo/ImagineCanada.svg';
import hc from '@assets/icons/logo/hc.svg';
import FallbackImage from '@assets/images/FallbackImage.svg';

export const imageGroupStoriesData = [
  {
    src: AccreditedMember,
    alt: 'p1',
    fallbackSrc: FallbackImage,
    height: '40px',
    width: '126px',
    link: {
      href: 'https://www.google.com/',
      target: '_blank',
    },
  },
  {
    src: BBB,
    alt: 'p2',
    fallbackSrc: FallbackImage,
    height: '40px',
    width: '102px',
    link: {
      href: 'https://www.google.com/',
      target: '_blank',
    },
  },
  {
    src: ImagineCanada,
    alt: 'p3',
    fallbackSrc: FallbackImage,
    height: '40px',
    width: '40px',
    link: {
      href: 'https://www.google.com/',
      target: '_blank',
    },
  },
  {
    src: hc,
    alt: 'p4',
    fallbackSrc: FallbackImage,
    height: '40px',
    width: '135px',
    link: {
      href: 'https://www.google.com/',
      target: '_blank',
    },
  },
];

const meta = {
  title: 'Library/Molecules/ImageGroup',
  component: ImageGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    data: {
      description: 'Image Group Data (Array of Image Objects)',
      control: {
        type: 'object',
      },
    },
    className: {
      control: 'text',
    },
  },
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
  excludeStories: ['imageGroupStoriesData'],
} satisfies Meta<typeof ImageGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const partnerIcon: Story = {
  args: {
    data: imageGroupStoriesData,
  },
};
