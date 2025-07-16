import PasswordVerificationForm from './PasswordVerificationForm';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Library/Molecules/PasswordVerificationForm',
  component: PasswordVerificationForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    passwordPlaceholder: {
      control: { type: 'text' },
    },
    reEnterpasswordPlaceholder: {
      control: { type: 'text' },
    },
    buttonLabel: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof PasswordVerificationForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PasswordVerification: Story = {
  args: {
    passwordLabel: 'Your New Password',
    passwordPlaceholder: 'Your new Password',
    confirmPasswordLabel: 'Re-enter your new password',
    reEnterpasswordPlaceholder: 'Re-enter your new Password',
    buttonLabel: 'Save',
    onSubmit: data => console.log(data),
    onCancel: () => console.log('Cancel'),
  },
};

export const signupPasswordForm: Story = {
  args: {
    passwordLabel: 'Password',
    passwordPlaceholder: 'Your new Password',
    confirmPasswordLabel: 'Confirm Password',
    reEnterpasswordPlaceholder: 'Re-enter your new Password',
    buttonLabel: 'Next',
    isSignup: true,
    onSubmit: data => console.log(data),
    onCancel: () => console.log('Back to Register Form 1'),
  },
};
