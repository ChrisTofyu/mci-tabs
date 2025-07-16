import React from 'react';
import Accordion from './Accordion';
import { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@radix-ui/themes';

const meta = {
  title: 'Library/Atoms/Accordion',
  component: Accordion,
  decorators: [
    Story => (
      <Theme style={{ padding: '10px', boxSizing: 'border-box' }}>
        <Story />
      </Theme>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    collapsible: {
      control: 'boolean',
    },
    applyRounded: {
      control: 'boolean',
    },
    applyPadding: {
      control: 'boolean',
    },
    backgroundColor: {
      control: 'color',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Accordions: Story = {
  args: {
    className: '',
    type: 'multiple',
    collapsible: true,
    applyRounded: false,
    applyPadding: false,
    backgroundColor: '',
    items: [
      {
        value: 'item-1',
        title: 'Getting Started with the Basics',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non risus in orci varius accumsan. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
      },
      {
        value: 'item-2',
        title: 'Advanced Techniques and Tips',
        content:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      },
      {
        value: 'item-3',
        title: 'Troubleshooting Common Issues',
        content:
          'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.',
      },
      {
        value: 'item-4',
        title: 'Best Practices and Final Thoughts',
        content:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      },
    ],
  },
};
