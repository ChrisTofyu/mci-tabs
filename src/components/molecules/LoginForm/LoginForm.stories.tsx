import LoginForm from './LoginForm';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Library/Molecules/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    emailPlaceholder: {
      control: { type: 'text' },
    },
    passwordPlaceholder: {
      control: { type: 'text' },
    },
    text: {
      control: { type: 'text' },
    },
    forgotPassText: {
      control: { type: 'text' },
    },
  },
  args: {
    forgotPassText: 'Forgot Your Password?',
    text: 'Login',
  },
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SignIn: Story = {
  args: {
    emailPlaceholder: 'Email address',
    passwordPlaceholder: 'Password',
    forgotPassText: 'I forgot my password',
    onSubmit: data => console.log(data),
  },
};
