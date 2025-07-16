import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Divider, DividerProps } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Library/Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal', // Explicit default value for orientation
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'inverse'],
      defaultValue: 'primary', // Explicit default value for color
    },
    size: {
      control: 'radio',
      options: [1, 2, 3, 4],
      defaultValue: 1, // Explicit default value for size
    },
  },
};

export default meta;

type Story = StoryObj<DividerProps>;

// Reusable horizontal container
const Container = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      width: '300px',
      border: '1px dashed #ccc',
      padding: '16px',
      marginBottom: '24px',
    }}
  >
    {children}
  </div>
);

// Reusable vertical container
const VerticalContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      height: '150px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px dashed #ccc',
      padding: '16px',
    }}
  >
    {children}
  </div>
);

// Default horizontal example
export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    color: 'primary',
    size: 1,
  },
};

// Default vertical example
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    color: 'primary',
    size: 2,
  },
};

// Size 4 divider inside a container (should fill the container width)
export const Size4HorizontalFillInContainer: Story = {
  render: args => (
    <Container>
      <Divider {...args} />
    </Container>
  ),
  args: {
    orientation: 'horizontal',
    color: 'primary',
    size: 4,
  },
};

// Size 4 vertical divider inside a vertical container (should fill the container height)
export const Size4VerticalFillInContainer: Story = {
  render: args => (
    <VerticalContainer>
      <Divider {...args} />
    </VerticalContainer>
  ),
  args: {
    orientation: 'vertical',
    color: 'secondary',
    size: 4,
  },
};
