import React from 'react';
import { Theme } from '@radix-ui/themes';
import Greetings from './Greetings';
import { StoryObj, Meta } from '@storybook/react';

const meta = {
  title: 'Library/Molecules/Greetings',
  component: Greetings,
  decorators: [
    Story => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    content: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
  },
} satisfies Meta<typeof Greetings>;

export default meta;

type Story = StoryObj<typeof meta>;

const content =
  'World Vision Canada is a Christian relief, development, and advocacy organization working to create lasting change in the lives of children and families. (To accommodate up to five lines of text).';
export const GreetingsWithSignIn: Story = {
  args: {
    content: content,
    title: 'Welcome back!',
    align: 'center',
  },
};
