import React from 'react';
import { Theme } from '@radix-ui/themes';
import { ToastMolecule } from './Toast';
import { Meta, StoryObj } from '@storybook/react/*';

const meta = {
  title: 'Library/Molecules/Toast',
  component: ToastMolecule,
  decorators: [
    Story => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    leftIcon: {
      control: 'boolean',
      description: 'Show the left icon in the callout.',
    },
    iconName: {
      control: 'text',
      description: 'Alternate left icon to display instead of the default.',
    },
    closeIcon: {
      control: 'boolean',
      description: 'Show the close icon in the callout.',
    },
    alternateCloseIcon: {
      control: 'text',
      description: 'Alternate close icon to display instead of the default.',
    },
    title: {
      control: 'text',
      description: 'Title text displayed at the top of the callout.',
    },
    children: {
      control: 'text',
      description: 'Content or children of the callout.',
    },
    type: {
      control: 'select',
      options: ['success', 'error', 'info'],
      description: 'Type of callout for styling purposes.',
    },
    duration: {
      control: 'number',
      description: 'Duration (in ms) before the callout auto-hides.',
    },
    autoHide: {
      control: 'boolean',
      description:
        'Determines if the callout should auto-hide after the specified duration.',
    },
    isVisible: {
      control: 'boolean',
      default: true,
      description: 'Determines if the callout is initially visible.',
    },
    closeCallback: {
      action: 'clicked',
      description: 'Callback function executed when the callout is closed.',
    },
    buttons: {
      control: 'object',
      description:
        'Button group props to display action buttons in the callout.',
    },
    yPosition: { control: 'select', option: ['top', 'bottom'] },
    xPosition: { control: 'select', option: ['start', 'center', 'end'] },
    showIcon: {
      control: 'boolean',
      description: 'Show the icon in the callout.',
    },
  },
  args: {
    isVisible: true,
    yPosition: 'top',
    xPosition: 'center',
    showIcon: false,
  },
} satisfies Meta<typeof ToastMolecule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const toast: Story = {
  args: {
    title: "We're excited to see you again!",
    children:
      'Access your personalized dashboard, manage your preferences, and explore all the features we have to offer.',
    type: 'info',
    closeIcon: true,
    closeCallback: () => console.log('this is a callback on closed toast'),
  },
};

export const bottomToast: Story = {
  args: {
    title: "We're excited to see you again!",
    children:
      'Access your personalized dashboard, manage your preferences, and explore all the features we have to offer.',
    type: 'info',
    closeIcon: true,
    closeCallback: () => console.log('this is a callback on closed toast'),
    yPosition: 'bottom',
  },
};

export const withLink: Story = {
  args: {
    showIcon: true,
    leftIcon: true,
    closeIcon: true,
    title: 'Your subscription has expired',
    children: (
      <div>
        <p>
          <strong>Your subscription has expired.</strong>
        </p>
        <p>
          To continue enjoying our services, please renew your subscription.
          Renewing ensures uninterrupted access to all premium features and
          benefits.
        </p>
        <p>
          <a href="/renew-subscription">Renew your subscription now</a> and stay
          connected!
        </p>
      </div>
    ),
    type: 'info',
    closeCallback: () => console.log('this is a callback on closed'),
  },
};

export const autoHide: Story = {
  args: {
    title: "We're excited to see you again!",
    children:
      'Access your personalized dashboard, manage your preferences, and explore all the features we have to offer.',
    type: 'info',
    closeIcon: true,
    autoHide: true,
    duration: 5000,
    closeCallback: () => console.log('this is a callback on closed toast'),
  },
};
