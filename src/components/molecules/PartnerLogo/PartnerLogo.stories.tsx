import React from 'react';
import PartnerLogo from './PartnerLogo';
import { Meta, StoryObj } from '@storybook/react/*';

const meta = {
  title: 'Library/Molecules/PartnerLogo',
  component: PartnerLogo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    className: {
      control: 'text',
    },
  },
  decorators: [
    Story => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PartnerLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const partnerIcon: Story = {
  args: {},
};
