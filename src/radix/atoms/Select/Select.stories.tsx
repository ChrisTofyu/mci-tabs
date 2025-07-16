import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Theme from '@radix-styles/atoms/Theme';
import Select, { SelectProps } from './Select';
import { selectOptions } from './constants';

const WrapperComponent = ({
  name,
  size,
  required,
  disabled,
  options,
  placeholder,
}: SelectProps) => {
  const [value, setValue] = useState('');

  return (
    <Select
      name={name}
      size={size}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      options={options}
      value={value}
      onChange={setValue}
    />
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Library/Atoms/Select',
  component: WrapperComponent,
  decorators: [
    Story => (
      <Theme style={{ minWidth: '200px' }}>
        <Story />
      </Theme>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    name: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['1', '2'],
    },
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    options: {
      control: 'object',
    },
    error: {
      control: 'object',
    },
    status: {
      control: 'number',
    },
    onChange: {
      control: 'object',
    },
    value: {
      control: 'text',
    },
  },
  // more on args: https://storybook.js.org/docs/writing-stories/args#args-object
  args: {
    placeholder: 'Select option...',
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    name: 'Service',
    size: '2',
    required: true,
    disabled: false,
    options: selectOptions,
    value: '',
    onChange: () => {},
  },
};
