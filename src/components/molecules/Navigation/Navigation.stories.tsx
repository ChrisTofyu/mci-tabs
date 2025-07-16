import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './Navigation';

const meta = {
  title: 'Library/Molecules/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Class Name',
      control: {
        type: 'text',
      },
    },
    logoAltText: {
      description: 'Logo Alt Text',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    className: '',
    logoAltText: 'logo',
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderWithLogo: Story = {
  args: {},
};
