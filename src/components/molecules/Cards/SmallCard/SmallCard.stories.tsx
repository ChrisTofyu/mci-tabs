import React from 'react';
import SmallCard from './SmallCard';
import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from '@components/molecules/LoginForm';
import Theme from '@radix-styles/atoms/Theme';

// Common Children for Small Card wrapper stories
const children = (
  <LoginForm
    emailPlaceholder="Email address"
    onSubmit={() => {}}
    passwordPlaceholder="Password"
    text="Login"
  />
);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Library/Molecules/Cards/SmallCard',
  component: SmallCard,
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
    children: {
      control: { type: 'object' },
    },
    size: { control: 'select', options: ['1', '2', '3'] },
    mode: { control: 'select', options: ['primary', 'inverse'] },
    containerClass: { control: 'text' },
  },
  // more on args: https://storybook.js.org/docs/writing-stories/args#args-object
  args: {
    size: '2',
    children: children,
  },
} satisfies Meta<typeof SmallCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

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
