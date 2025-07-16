import React from 'react';
import Quote from './Quote';
import { Meta, StoryObj } from '@storybook/react/*';
import FallbackImage from '@assets/images/FallbackImage.svg';

const meta = {
  title: 'Library/Molecules/Quote',
  component: Quote,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    imageUrl: {
      control: 'text',
    },
    imageAltText: {
      control: 'text',
    },
    imageFallback: {
      control: 'text',
    },
    quoteText: {
      control: 'text',
    },
    signatureText: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    sourceText: {
      control: 'text',
    },
    sourceUrl: {
      control: 'text',
    },
  },
  decorators: [
    Story => (
      <div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Quote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const QuoteContent: Story = {
  args: {
    imageUrl:
      'https://beta.worldvision.ca/adobe/dynamicmedia/deliver/dm-aid--e5c92607-fb3f-4889-b3a7-48b685085912/wvc-child-sponsorship-testimonial.png',
    imageAltText: 'dummy alt',
    imageFallback: FallbackImage,
    quoteText:
      '“I am amazed to see how our small monthly donation makes a huge difference in those people’s lives. This cannot be classified as an expense, it is a long term investment that we are making for future generations of this world.”',
    signatureText: 'Dilpreet Gill, Sponsor since 1992',
    className: '',
    sourceText: 'source',
    sourceUrl: 'https://dev-beta.worldvision.ca/en/home.html',
  },
};
