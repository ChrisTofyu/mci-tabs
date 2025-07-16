import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import HeroBasic from './HeroBasic';
import { Theme } from '@radix-ui/themes';

const meta = {
  title: 'Library/Molecules/HeroBasic',
  component: HeroBasic,
  decorators: [
    Story => (
      <Theme style={{ padding: '20px 16px', boxSizing: 'border-box' }}>
        <Story />
      </Theme>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
    iconName: {
      control: {
        type: 'text',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    buttonName: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof HeroBasic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeroBasicContent: Story = {
  args: {
    className: '',
    iconName: 'icon-campaign',
    title: 'Together, we drive progress',
    description:
      'In 2023, we helped 16.5+ million of the world’s most vulnerable children and families overcome poverty.',
    buttonName: 'Donate now',
    onButtonClick: () => {
      console.log('Clicked');
    },
  },
};
