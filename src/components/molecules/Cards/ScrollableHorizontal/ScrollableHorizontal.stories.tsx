import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ScrollableHorizontal from './ScrollableHorizontal';
import Theme from '@radix-styles/atoms/Theme';
import DataCard, { DataCardProps } from '@components/molecules/DataCard';
import Box from '@radix-styles/atoms/Box';

const DataCardList: DataCardProps[] = [
  {
    heading: '1M+',
    subHeading: 'People served',
    content:
      'Our livelihood improvement programs enable millions globally to reach better outcomes',
    logoName: 'education',
    logoText: 'Education',
  },
  {
    heading: '2M+',
    subHeading: 'Supported youth',
    content: 'Youth gained safe and supportive learning environments',
    logoName: 'food',
    logoText: 'Food',
  },
  {
    heading: '3M+',
    subHeading: 'People served',
    content:
      'Our livelihood improvement programs enable millions globally to reach better outcomes',
    logoName: 'water',
    logoText: 'Water',
  },
  {
    heading: '4M+',
    subHeading: 'Children protected',
    content:
      'WVC works to protect children through rights and safety initiatives',
    logoName: 'health',
    logoText: 'Health',
  },
  {
    heading: '5M+',
    subHeading: 'Gained water access',
    content: 'WVC helped people gained access to clean water.',
    logoName: 'education',
    logoText: 'Education',
  },
  {
    heading: '6M+',
    subHeading: 'People served',
    content:
      'Our livelihood improvement programs enable millions globally to reach better outcomes',
    logoName: 'food',
    logoText: 'Food',
  },
  {
    heading: '7M+',
    subHeading: 'People served',
    content:
      'Our livelihood improvement programs enable millions globally to reach better outcomes',
    logoName: 'water',
    logoText: 'Water',
  },
  {
    heading: '8M+',
    subHeading: 'Children protected',
    content:
      'WVC works to protect children through rights and safety initiatives',
    logoName: 'education',
    logoText: 'Education',
  },
  {
    heading: '9M+',
    subHeading: 'Supported youth',
    content: 'Youth gained safe and supportive learning environments',
    logoName: 'health',
    logoText: 'Health',
  },
  {
    heading: '10M+',
    subHeading: 'Gained water access',
    content: 'WVC helped people gained access to clean water.',
    logoName: 'water',
    logoText: 'Water',
  },
];

const meta = {
  title: 'Library/Molecules/Cards/ScrollableHorizontal',
  component: ScrollableHorizontal,
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
    itemsLength: {
      control: {
        type: 'number',
      },
    },
    heading: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    mode: {
      control: {
        type: 'select',
      },
      options: ['primary', 'inverse'],
    },
    showDescription: {
      control: 'boolean',
    },
    classname: {
      control: 'text',
    },
    children: {
      control: 'object',
    },
    name: {
      control: 'text',
    },
  },
  args: {
    showDescription: true,
    itemsLength: DataCardList.length,
    heading: 'Impact Summary',
    description:
      'Discover our global impact and collective support for communities.',
    name: 'child',
    children: (
      <>
        {DataCardList?.map(
          (
            { heading, subHeading, content, logoName, logoText, size, variant },
            idx
          ) => (
            <Box key={idx + '_scroll_card'} id={'child-' + (idx + 1)}>
              <DataCard
                size={size || '1'}
                variant={variant || 'surface'}
                content={content || ''}
                heading={heading || 'Heading'}
                logoName={logoName || 'food'}
                logoText={logoText || 'Food'}
                subHeading={subHeading || 'Sub Heading'}
              />
            </Box>
          )
        )}
      </>
    ),
  },
} satisfies Meta<typeof ScrollableHorizontal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mode: 'primary',
  },
};

export const Inverse: Story = {
  args: {
    mode: 'inverse',
  },
};
