import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '@radix-styles/atoms/Button';
import { Theme } from '@radix-ui/themes';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Library/Atoms/Button',
  component: Button,
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
    ariaLabelName: {
      description: 'aria-label for button component',
      control: {
        type: 'text',
      },
    },
    mode: {
      description: 'Style of the button?',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'inverse',
        'outline',
        'transparent',
        'brand',
      ],
      control: { type: 'select' },
    },
    size: {
      description: 'Size of the button?',
      options: ['3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'none'],
      control: { type: 'select' },
    },
    icon: {
      description: 'Icon to display',
      control: { type: 'text' },
    },
    iconLeft: {
      if: { arg: 'icon', exists: true },
      description: 'Align/Display the icon to which side?',
      options: [true, false],
      control: { type: 'boolean' },
    },
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    rounded: {
      control: { type: 'boolean' },
      options: [true, false],
    },
    disabled: {
      description: 'To disable the button',
      options: [true, false],
      control: { type: 'boolean' },
    },
    loading: { control: 'boolean' },
  },
  // more on args: https://storybook.js.org/docs/writing-stories/args#args-object
  args: {
    text: 'Button',
    mode: 'primary',
    iconLeft: true,
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Text: Story = {
  args: {
    size: 'xl',
  },
};

export const IconPlusText: Story = {
  args: {
    size: 'xl',
    icon: 'icon-plus',
  },
};

export const TextPlusIcon: Story = {
  args: {
    size: 'xl',
    icon: 'icon-plus',
    iconLeft: false,
  },
};

export const Icon: Story = {
  args: {
    size: 'xl',
    icon: 'icon-plus',
    text: '',
    ariaLabelName: 'Plus Button',
  },
};

export const RoundedIcon: Story = {
  args: {
    size: 'xl',
    mode: 'primary',
    icon: 'icon-plus',
    iconLeft: false,
    text: '',
    ariaLabelName: 'Plus Button',
    rounded: true,
  },
};

export const ButtonSpecial: Story = {
  args: {
    size: 'xl',
    icon: 'icon-arrow',
    text: 'Button',
    iconLeft: false,
    effects: 'special',
  },
};

export const ButtonSlider: Story = {
  args: {
    size: 'xl',
    text: 'Donate now',
    effects: 'slider',
  },
};

export const Loading: Story = {
  args: {
    size: 'xl',
    text: 'Donate',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    size: 'xl',
    text: 'Donate',
    disabled: true,
  },
};
