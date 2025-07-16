import React from 'react';
import AddressForm from './AddressForm';
import type { Meta, StoryObj } from '@storybook/react';
import Theme from '@radix-styles/atoms/Theme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Library/Molecules/UserProfile/AddressForm',
  component: AddressForm,
  decorators: [
    Story => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    manualEntryDescription: { control: 'text' },
    address: { control: 'object' },
    manualEntryText: { control: 'text' },
    leftBtnName: { control: 'text' },
    rightBtnName: { control: 'text' },
    loading: { control: 'boolean' },
    onSubmit: { control: 'object' },
    className: { control: 'text' },
    formSubmitStatus: { control: 'boolean' },
  },
  // more on args: https://storybook.js.org/docs/writing-stories/args#args-object
  args: {},
} satisfies Meta<typeof AddressForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Address: Story = {
  args: {
    title: 'Address',
    description: 'Start typing your address and we can auto-fill the rest',
    manualEntryText: 'Enter address manually',
    manualEntryDescription: 'Please enter your address',
    autoFillText: 'Enter address automatically',
    prefixText: 'or',
    formSubmitStatus: false,
    address: {
      unit: '56A',
      streetNumber: '142',
      streetName: 'ASHTON',
      streetType: 'CRES',
      streetDirection: 'West',
      city: 'BRAMPTON',
      province: 'ON',
      postalCode: 'L6S3J9',
      country: 'Canada',
    },
    onSubmit: data => console.log(data),
  },
};
