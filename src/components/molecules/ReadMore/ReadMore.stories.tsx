import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ReadMore from '@components/molecules/ReadMore';
import { Theme } from '@radix-ui/themes';

const meta = {
  title: 'Library/Molecules/ReadMore',
  component: ReadMore,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
  argTypes: {
    contents: {
      description: 'The contents of the component',
      control: { type: 'object' },
    },
    maxLines: {
      description: 'The maximum number of lines to show',
      control: { type: 'number' },
    },
    contentClassName: {
      description: 'Dynamically adding styles to the contents',
      control: { type: 'text' },
    },
    align: {
      description: 'Dynamically aligning the text link based on the input',
      control: { type: 'text' },
    },
    expandButtonLabel: {
      description: 'The label of the expand button',
      control: { type: 'text' },
    },
    collapseButtonLabel: {
      description: 'The label of the collapse button',
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof ReadMore>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    contents: [
      'My name is Ashraful Siam. I live with my parents. I have 2 brothers and one sister. I am in Grade 4. I am currently enrolled in primary school and my favourite subject is my national language. I like to play cricket. I am in good health.',
    ],
    maxLines: 1,
  },
};
