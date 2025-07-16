import React from 'react';
import QuoteBlock from './QuoteBlock';
import { Meta, StoryObj } from '@storybook/react/*';

const meta = {
  title: 'Library/Molecules/QuoteBlock',
  component: QuoteBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    quoteText: {
      control: 'text',
    },
    quoteTextColor: {
      control: 'color',
    },
    quoteTextSize: {
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
    borderColor: {
      control: 'color',
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
} satisfies Meta<typeof QuoteBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const QuoteBlockContent: Story = {
  args: {
    quoteText:
      'We stand by the belief that if we have the ability to help, we have the responsibility to act. This ethos shapes our organization’s approach to humanitarian work, emphasizing not just charity, but sustainable development, empowerment, and advocacy. ',
    quoteTextColor: '#000',
    quoteTextSize: '4',
    borderColor: '#E86100',
    className: '',
  },
};
