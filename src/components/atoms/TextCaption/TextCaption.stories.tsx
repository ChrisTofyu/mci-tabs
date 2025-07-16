import type { Meta, StoryObj } from '@storybook/react';
import { TextCaption } from './TextCaption';

const meta = {
  title: 'Library/Atoms/TextCaption',
  component: TextCaption,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    messages: {
      control: 'object',
    },
    mode: {
      options: ['success', 'error'],
      control: {
        type: 'select',
      },
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
  },
  args: {
    mode: 'error',
    size: '2',
    weight: 'regular',
  },
} satisfies Meta<typeof TextCaption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleMessage: Story = {
  args: {
    messages: 'This field is required.',
  },
};

export const MultipleMessages: Story = {
  args: {
    messages: [
      'Invalid email address.',
      'Password must be at least 8 characters.',
    ],
  },
};

export const NoMessage: Story = {
  args: {
    messages: null,
  },
};
