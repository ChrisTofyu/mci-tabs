import type { Meta, StoryObj } from '@storybook/react';
import PieChart from './PieChart';

const meta: Meta<typeof PieChart> = {
  title: 'Library/Molecules/PieChart',
  component: PieChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description:
        'Donation impact entry with value (percentage), description, color, and size (1=Small, 2=Medium, 3=Large)',
    },
    className: {
      control: { type: 'text' },
      description: 'Optional class name to style the container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    data: {
      value: 84.9,
      description: 'Field programs and advocacy',
      color: '#ec6707',
      size: '3', // Large
    },
    className: '',
  },
};

export const Medium: Story = {
  args: {
    data: {
      value: 60,
      description: 'Emergency response',
      color: '#ff6b6b',
      size: '2', // Medium
    },
    className: '',
  },
};

export const Small: Story = {
  args: {
    data: {
      value: 42,
      description: '',
      color: '#4db8ff',
      size: '1', // Small
    },
    className: '',
  },
};
