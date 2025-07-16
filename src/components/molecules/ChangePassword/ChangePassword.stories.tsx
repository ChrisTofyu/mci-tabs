import React from 'react';
import ChangePassword from './ChangePassword';
import { Meta, StoryObj } from '@storybook/react';
import Theme from '@radix-styles/atoms/Theme';

const meta = {
  title: 'Library/Molecules/ChangePassword',
  component: ChangePassword,
  decorators: [
    Story => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ChangePassword>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ChangePasswordSection: Story = {
  args: {
    title: 'Password',
    currentPasswordLabel: 'Current Password',
    currentPasswordPlaceholder: 'Current Password',
    isUserprofile: true,
    passwordLabel: 'New Password',
    passwordPlaceholder: 'New Password',
    confirmPasswordLabel: 'Confirm New Password',
    reEnterpasswordPlaceholder: 'Confirm New Password',
    buttonLabel: 'Submit',
    onSubmit: () => console.log('submitted'),
    onCancel: () => console.log('cancelled'),
    analyticsProps: { form: 'changepassword', type: 'changepassword' },
    formSubmitStatus: false,
  },
};
