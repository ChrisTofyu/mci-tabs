import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';
import { Theme } from '@radix-ui/themes';

const meta = {
  title: 'Library/Atoms/Heading',
  component: Heading,
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
    children: {
      control: 'text',
    },
    size: {
      control: {
        type: 'select',
      },
      options: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
      ],
    },
    weight: {
      control: {
        type: 'select',
      },
      options: ['regular', 'semibold', 'bold'],
    },
    color: {
      control: 'color',
    },
  },
  args: {
    as: 'h1',
    size: '9',
    weight: 'bold',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const heading: Story = {
  args: {
    children: 'Heading Text',
  },
};

export const headingWithHTML: Story = {
  args: {
    children: '<h1>Heading Text</h1>',
  },
};
