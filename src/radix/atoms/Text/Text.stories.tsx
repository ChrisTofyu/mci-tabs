import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';
import { Theme } from '@radix-ui/themes';

const meta: Meta<typeof Text> = {
  title: 'Library/Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
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
      description: 'Font size',
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
    className: {
      control: 'text',
    },
  },
  args: {
    children: 'Sample Text',
    size: '3',
    weight: 'regular',
    as: 'span',
  },
};

export default meta;

type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: {
    children: 'Default Text',
  },
};

export const LargeBoldText: Story = {
  args: {
    children: 'Large Bold Text',
    size: '7',
    weight: 'bold',
  },
};

export const TextWithHTML: Story = {
  args: {
    children:
      '<div><p>Hello, world!</p><span>React is great!</span><ul><li>List 1</li><li>List 2</li><li>List 3</li><li>List 4 <a href="#">some link1</a></li></ul></div>',
    size: '2',
    weight: 'regular',
  },
};
