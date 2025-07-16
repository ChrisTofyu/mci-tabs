import React from 'react';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@radix-ui/themes';
import { Input } from './Input';
import { payloadProps } from '@internal/types/common';

const meta = {
  title: 'Library/Atoms/Input',
  component: Input,
  decorators: [
    Story => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'number', 'email', 'password'],
    },
    placeholder: { control: 'text' },
    readOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    className: { control: 'text' },
    errorMessage: { control: 'text' },
    showSuccessIcon: { control: 'boolean' },
  },
  args: {
    label: 'Input Label',
    name: 'example',
    type: 'text',
    placeholder: 'Enter text here',
    readOnly: false,
    disabled: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    label: 'Default Input',
    name: 'example',
  },
};

export const EmailInput: Story = {
  args: {
    label: 'Email Input',
    type: 'email',
    placeholder: 'Enter email address',
    name: 'email',
    rules: {
      required: 'Email is required',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: 'Enter a valid email address',
      },
    },
  },
};

export const PasswordInput: Story = {
  args: {
    label: 'Password Input',
    type: 'password',
    placeholder: 'Enter Password',
    name: 'password',
    rules: {
      required: 'Email is required',
    },
  },
};

export const EmailValidationInput: Story = {
  render: function EmailValidationComponent() {
    const {
      register,
      handleSubmit,
      setValue,
      control,
      formState: { errors },
    } = useForm<payloadProps>({
      mode: 'onBlur', // Validate on blur
    });

    const onSubmit = (data: payloadProps) => {
      console.log('Form Data:', data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          label="Email Input"
          name="email"
          type="text"
          placeholder="Enter your email"
          register={register as unknown as UseFormRegister<FieldValues>}
          control={control}
          showSuccessIcon={true}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Enter a valid email address',
            },
          }}
          error={errors}
          setValue={setValue}
        />
      </form>
    );
  },
};

export const PasswordValidationInput: Story = {
  render: function PasswordValidationComponent() {
    const {
      register,
      handleSubmit,
      setValue,
      control,
      formState: { errors },
    } = useForm<payloadProps>({
      mode: 'onBlur', // Validate on blur
    });

    const onSubmit = (data: payloadProps) => {
      console.log('Form Data:', data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          label="Password Input"
          name="password"
          type="password"
          placeholder="Enter your password"
          register={register as unknown as UseFormRegister<FieldValues>}
          control={control}
          showSuccessIcon={true}
          rules={{
            required: 'Password is required',
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9\W_]).{8,}$/,
              message: 'Enter a valid password',
            },
          }}
          error={errors}
          setValue={setValue}
        />
      </form>
    );
  },
};
