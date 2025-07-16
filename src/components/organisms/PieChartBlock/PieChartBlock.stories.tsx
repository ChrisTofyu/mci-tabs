import type { Meta, StoryObj } from '@storybook/react';
import { PieChartBlock } from './PieChartBlock';

const meta: Meta<typeof PieChartBlock> = {
  title: 'Library/Organisms/PieChartBlock',
  component: PieChartBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description:
        'Array of donation impact entries with description, value (percentage), color, and optional size ("1" = small, "2" = medium, "3" = large)',
    },
    heading: {
      control: 'text',
      description: 'Optional heading to display at the top',
    },
    subheading: {
      control: 'text',
      description: 'Optional subheading to provide context',
    },
    className: {
      control: { type: 'text' },
      description: 'Optional class name to style the container',
    },
    linkUrl: {
      control: 'text',
      description: 'Optional URL for the link at the bottom of the chart',
    },
    linkDescription: {
      control: 'text',
      description:
        'Optional description text for the link at the bottom of the chart',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with different sizes for each chart
export const Default: Story = {
  args: {
    data: [
      {
        description: 'Field programs and advocacy',
        value: 84.9,
        color: '#ec6707',
        size: '3', // Large
      },
      {
        description: 'Emergency response',
        value: 60,
        color: '#ff6b6b',
        size: '2', // Medium
      },
      {
        description: '',
        value: 45,
        color: '#4db8ff',
        size: '1', // Small
      },
    ],
    heading: 'How we use your donations',
    subheading: `In these uncertain times, your generosity helps us do our work. Thank you for partnering with us to drive out poverty in the most marginalized parts of the world. Here's how we are putting your donations to work.`,
    className: '',
    linkUrl: 'https://www.example.com/annual-report',
    linkDescription: '2024 Annual Report',
  },
};

// Custom content with different sizes for each chart
export const CustomContent: Story = {
  args: {
    data: [
      {
        description: 'Disaster relief',
        value: 78,
        color: '#66cdaa',
        size: '3',
      },
      {
        description: '',
        value: 55,
        color: '#f4a261',
        size: '1',
      },
      {
        description: 'Child protection',
        value: 90,
        color: '#2a9d8f',
        size: '2',
      },
    ],
    heading: 'Where Your Money Goes',
    subheading:
      'Your contributions make a difference in emergencies worldwide.',
    className: '',
    linkUrl: 'https://www.example.com/annual-report',
    linkDescription: '2024 Annual Report',
  },
};

// Single chart example to test layout and scaling
export const SingleChart: Story = {
  args: {
    data: [
      {
        description: 'Only one chart example',
        value: 92,
        color: '#ff9f1c',
        size: '3',
      },
    ],
    heading: 'Single Chart Example',
    subheading: 'This is how a single chart looks with full size.',
    className: '',
    linkUrl: 'https://www.example.com/report',
    linkDescription: 'Full Report',
  },
};
