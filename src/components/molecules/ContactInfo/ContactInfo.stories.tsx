import React from 'react';
import ContactInfo from './ContactInfo';
import { Meta, StoryObj } from '@storybook/react';
import Theme from '@radix-styles/atoms/Theme';

const meta = {
  title: 'Library/Molecules/ContactInfo',
  component: ContactInfo,
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
  argTypes: {
    primaryPhonePlaceholder: {
      control: { type: 'text' },
    },
    alternatePhonePlaceholder: {
      control: { type: 'text' },
    },
    formData: {
      control: { type: 'object' },
    },
    text: {
      control: { type: 'text' },
    },
    textSave: {
      control: { type: 'text' },
    },
    textCancel: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
  },
  args: {
    title: 'Contact',
    description: 'Phone numbers',
    text: 'Edit',
    textSave: 'Save',
    textCancel: 'Cancel',
  },
} satisfies Meta<typeof ContactInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ContactForm: Story = {
  args: {
    primaryPhonePlaceholder: 'Primary Phone No.',
    alternatePhonePlaceholder: 'Alternate Phone No.',
    formData: { primaryPhone: '1234567890', alternatePhone: '' },
    onSubmit: data => console.log(data),
  },
};
