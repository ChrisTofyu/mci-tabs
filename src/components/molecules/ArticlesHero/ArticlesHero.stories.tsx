import React from 'react';
import Article from './ArticlesHero';
import { Meta, StoryObj } from '@storybook/react/*';
import FallbackImage from '@assets/images/FallbackImage.svg';

const meta = {
  title: 'Library/Molecules/Article',
  component: Article,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    imagePosition: {
      options: ['top', 'right', 'left'],
      control: { type: 'select' },
    },
    imageUrl: {
      control: 'text',
    },
    imageAltText: {
      control: 'text',
    },
    imageFallback: {
      control: 'text',
    },
    articleTitle: {
      control: 'text',
    },
    articleDescription: {
      control: 'text',
    },
    authorName: {
      control: 'text',
    },
    authoredDate: {
      control: 'text',
    },
    className: {
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
} satisfies Meta<typeof Article>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ArticleHeroContent: Story = {
  args: {
    imagePosition: 'top',
    imageUrl:
      'https://stg-beta.worldvision.ca/adobe/dynamicmedia/deliver/dm-aid--3a8bc598-805b-426b-aad6-d88cfe303ebb/childsponsorship.jpeg',
    imageAltText: 'dummy alt',
    imageFallback: FallbackImage,
    articleTitle:
      'An education interrupted: A Venezuelan’s story of escaping oppression',
    articleDescription:
      'In 2023, we helped 16.5+ million of the world’s most vulnerable children and families overcome poverty. ',
    authorName: 'Melanie Ramos',
    authoredDate: '2025-01-11',
    className: '',
  },
};
