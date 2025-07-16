import type { Meta, StoryObj } from '@storybook/react';
import ImageCarousel from '@components/molecules/ImageCarousel';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Library/Molecules/ImageCarousel',
  component: ImageCarousel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    slides: {
      description: 'Array of slides to display',
      control: {
        type: 'object',
      },
    },
    mode: {
      description: 'Carousel Mode',
      options: ['default', 'thumbnail'],
      control: { type: 'select' },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof ImageCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const defaultMode: Story = {
  args: {
    slides: [
      {
        src: 'https://dummyimage.com/872x470/000/fff&text=1+Image',
        tooltipTitle: '1',
        tooltip: 'Tooltip 1',
      },
      {
        src: 'https://dummyimage.com/872x470/122/fff&text=2+Image',
        tooltipTitle: '2',
        tooltip: 'Tooltip 2 Tooltip 2',
      },
      {
        src: 'https://dummyimage.com/872x470/222/fff&text=3+Image',
        tooltipTitle: '3',
        tooltip: 'Tooltip 3 Tooltip 3 Tooltip 3',
      },
      {
        src: 'https://dummyimage.com/872x470/999/fff&text=4+Image',
        tooltipTitle: '4',
        tooltip:
          'Tooltip 4 Tooltip 4 Tooltip 4 Tooltip 4 Tooltip 4 Tooltip 4 Tooltip 4 Tooltip 4',
      },
      {
        src: 'https://dummyimage.com/872x470/300/fff&text=5+Image',
        tooltipTitle: '5',
        tooltip: 'Tooltip 5',
      },
    ],
    mode: 'default',
  },
};

export const thumbnailMode: Story = {
  args: {
    slides: [
      {
        src: 'https://dummyimage.com/872x470/000/fff&text=1+Image',
      },
      {
        src: 'https://dummyimage.com/872x470/122/fff&text=2+Image',
      },
      {
        src: 'https://dummyimage.com/872x470/222/fff&text=3+Image',
      },
      {
        src: 'https://dummyimage.com/872x470/999/fff&text=4+Image',
      },
      {
        src: 'https://dummyimage.com/872x470/300/fff&text=5+Image',
      },
    ],
    mode: 'thumbnail',
    maxWidth: '400px',
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'lightgrey',
      values: [{ name: 'lightgrey', value: '#d3d3d3' }],
    },
  },
};
