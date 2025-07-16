import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Truncate from './Truncate';

const meta = {
  title: 'Library/Atoms/Truncate',
  component: Truncate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    width: {
      control: {
        type: 'text',
      },
    },
    height: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Truncate>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TruncatedText: Story = {
  args: {
    children:
      'This is a long text that will be truncated, eli, Find out more. So based on the height and width the extra text that will be truncated.',
    height: '110px',
    width: '100px',
  },
};
