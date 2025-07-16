import React from 'react';
import DataCard from './DataCard';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@radix-ui/themes';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Library/Molecules/DataCard',
  component: DataCard,
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
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    heading: { control: 'text' },
    subHeading: { control: 'text' },
    content: { control: 'text' },
    size: { control: 'select', options: ['1', '2', '3'] },
    variant: { control: 'select', options: ['default', 'surface'] },
    logoText: { control: 'text' },
    logoName: {
      control: 'select',
      options: ['education', 'food', 'health', 'water', 'mark', 'child'],
    },
    containerClass: { control: 'text' },
  },
  // more on args: https://storybook.js.org/docs/writing-stories/args#args-object
  args: {
    heading: '4M+',
    subHeading: 'People served',
    content:
      'Our livelihood improvement programs enable millions globally to reach better outcomes',
    size: '1',
    logoName: 'education',
  },
} satisfies Meta<typeof DataCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    variant: 'default',
    logoText: 'Water',
    logoName: 'water',
  },
};

export const Surface: Story = {
  args: {
    variant: 'surface',
    logoText: 'Food',
    logoName: 'food',
  },
};
