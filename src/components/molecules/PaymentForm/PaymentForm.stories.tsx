import React from 'react';
import { Theme } from '@radix-ui/themes';
import PaymentForm from './PaymentForm';
import { StoryObj, Meta } from '@storybook/react';

const meta = {
  title: 'Library/Molecules/PaymentForm',
  component: PaymentForm,
  decorators: [
    Story => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'center',
  },
  argTypes: {
    publishkey: {
      control: 'text',
    },
    clientid: {
      control: 'text',
    },
    amount: {
      control: 'number',
    },
    currency: {
      control: 'text',
    },
    buttonLabelText: {
      control: 'text',
    },
  },
} satisfies Meta<typeof PaymentForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const payment: Story = {
  args: {
    publishkey: 'pk_test_oKhSR5nslBRnBZpjO6KuzZeX',
    clientid: '',
    amount: 100,
    currency: 'usd',
    buttonLabelText: 'Donate now',
    onDonateClick: () => {},
    onBackBtnClick: () => {},
  },
};
