import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Link from './Link';
import { Flex } from '@radix-ui/themes';

const meta = {
  title: 'Library/Atoms/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      description: 'Content to display the hypertext link',
      control: { type: 'text' },
    },
    href: {
      description: 'Hypertext URL to redirect to another page',
      control: { type: 'text' },
    },
    target: {
      description:
        'The target value specifies how to open the redirect the Hypertext URL',
      options: ['_blank', '_self', '_parent', '_top', 'framename'],
      control: { type: 'select' },
    },
    ignoreHref: {
      control: { type: 'boolean' },
    },
  },
  decorators: [
    Story => (
      <Flex display={'flex'} justify={'center'}>
        <Story />
      </Flex>
    ),
  ],
  args: {
    href: '',
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Hyperlink: Story = {
  args: {
    href: 'https://www.google.com',
    children: 'Click me',
    target: '_blank',
  },
};

export const UnderlineText: Story = {
  args: {
    children: 'Normal Text',
  },
};
