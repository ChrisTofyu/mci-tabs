import React from 'react';
import ButtonGroup from './ButtonGroup';
import { Meta, StoryObj } from '@storybook/react/*';

const meta = {
  title: 'Library/Molecules/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    data: {
      description: 'Button Group Data (Array of Button Objects)',
      control: {
        type: 'object',
      },
    },
    direction: {
      description: 'Button Group Direction (Horizontal/Vertical)',
      options: ['horizontal', 'vertical'],
      control: {
        type: 'select',
      },
    },
    disabled: {
      description: 'To disable the button',
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
  args: {
    direction: 'horizontal',
  },
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    data: [
      {
        text: 'Button 1',
      },
    ],
  },
};

export const ButtonPair: Story = {
  args: {
    data: [
      {
        text: 'Button 1',
        icon: 'icon-plus',
      },
      {
        text: 'Button 2',
        icon: 'icon-arrow',
        iconLeft: true,
      },
    ],
  },
};

export const IconPlusButton: Story = {
  args: {
    data: [
      {
        icon: 'icon-chevron-left',
        iconLeft: true,
        size: 'lg',
        mode: 'outline',
      },
      {
        text: 'Button 1',
      },
    ],
  },
};

export const IconButtonGroup: Story = {
  args: {
    data: [
      {
        text: 'Button 1',
        icon: 'icon-plus',
      },
      {
        text: 'Button 2',
        icon: 'icon-arrow',
        iconLeft: true,
      },
    ],
  },
};

export const TripleButton: Story = {
  args: {
    data: [
      {
        text: 'Button 1',
      },
      {
        text: 'Button 2',
      },
      {
        text: 'Button 3',
      },
    ],
  },
};

export const Disabled: Story = {
  args: {
    data: [
      {
        text: 'Button',
      },
    ],
    disabled: true,
  },
};
