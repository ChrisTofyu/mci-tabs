import UserDetailsForm from './UserDetailsForm';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Library/Molecules/UserDetailsForm',
  component: UserDetailsForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    emailPlaceholder: {
      control: { type: 'text' },
    },
    firstNamePlaceholder: {
      control: { type: 'text' },
    },
    lastNamePlaceholder: {
      control: { type: 'text' },
    },
    buttonText: {
      control: { type: 'text' },
    },
    isSignup: {
      control: 'boolean',
    },
  },
  args: {
    emailPlaceholder: 'Email address',
    firstNamePlaceholder: 'First name',
    lastNamePlaceholder: 'Last name',
    buttonText: 'Next',
    onSubmit: data => console.log(data),
  },
} satisfies Meta<typeof UserDetailsForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UserDetails: Story = {
  args: {
    onBackBtnClick: () => {},
  },
};
export const SignupForm: Story = {
  args: {
    isSignup: true,
  },
};
