import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import IconStatement from './IconStatement';
import { Theme } from '@radix-ui/themes';

const meta = {
  title: 'Library/Molecules/Icon Statement',
  decorators: [
    Story => (
      <Theme>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Story />
        </div>
      </Theme>
    ),
  ],
  component: IconStatement,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      description: 'Icon background',
      control: 'color',
    },
    rounded: {
      description: 'Rounded background',
      control: 'boolean',
    },
    iconName: {
      description: 'Class name',
      control: {
        type: 'text',
      },
    },
    iconSize: {
      description: 'Icon size',
      control: {
        type: 'text',
      },
    },
    iconColor: {
      description: 'Icon color',
      control: 'color',
    },
    heading: {
      description: 'Heading',
      control: {
        type: 'text',
      },
    },
    description: {
      description: 'Description',
      control: {
        type: 'text',
      },
    },
    className: {
      description: 'Class name',
      control: {
        type: 'text',
      },
    },
    gapX: {
      description: 'Gap',
      control: {
        type: 'text',
      },
    },
    gapY: {
      description: 'Gap',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof IconStatement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const icon: Story = {
  args: {
    backgroundColor: '#E86100',
    backgroundSize: 'auto',
    backgroundPadding: '0.3rem',
    rounded: true,
    iconName: 'icon-poverty',
    iconSize: '24',
    iconColor: '#fff',
    heading: 'Be an agent of change',
    description:
      'When you sponsor a child, you are helping to break the cycle of poverty.',
  },
};

export const iconWithPadding: Story = {
  args: {
    backgroundColor: '#E86100',
    backgroundSize: '40px',
    rounded: true,
    iconName: 'icon-poverty',
    iconSize: '24',
    iconColor: '#fff',
    heading: 'Be an agent of change',
    description:
      'When you sponsor a child, you are helping to break the cycle of poverty.',
  },
};
