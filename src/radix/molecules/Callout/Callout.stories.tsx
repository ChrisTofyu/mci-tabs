import React from 'react';
import { Theme } from '@radix-ui/themes';
import CalloutMolecule from './Callout';
import { Meta, StoryObj } from '@storybook/react/*';
import Box from '@radix-styles/atoms/Box';
import Text from '@radix-styles/atoms/Text';
import Flex from '@radix-styles/atoms/Flex';

const meta = {
  title: 'Library/Molecules/Callout',
  component: CalloutMolecule,
  decorators: [
    Story => (
      <Theme>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Story />
        </div>
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
      options: ['success', 'error', 'info', 'none'],
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
    minWidth: { control: 'text', description: 'Minimum width of the callout.' },
    maxWidth: { control: 'text', description: 'Maximum width of the callout.' },
    width: { control: 'text', description: 'Width of the callout.' },
    showIcon: {
      control: 'boolean',
      description: 'Show the icon in the callout.',
    },
    triggerToast: { control: 'boolean', description: 'Trigger the toast.' },
  },
  args: {
    isVisible: true,
    leftIcon: true,
    showIcon: false,
  },
} satisfies Meta<typeof CalloutMolecule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showIcon: true,
    title: "We're excited to see you again!",
    children:
      'Access your personalized dashboard, manage your preferences, and explore all the features we have to offer.',
    type: 'info',
    closeCallback: () => console.log('this is a callback on closed'),
  },
};

export const withLink: Story = {
  args: {
    showIcon: true,
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
    showIcon: true,
    closeIcon: true,
    title: 'Important Information',
    children:
      'We have updated our terms of service to provide you with a better experience. Please take a moment to review the changes.',
    type: 'info',
    autoHide: true,
    duration: 5000,
    closeCallback: () => console.log('this is a callback on closed'),
  },
};

const ProductCheckoutComponent = () => {
  const amount = 151;
  const currencyCode = '$';
  const checkoutType = 'CAD/ Monthly';
  return (
    <Flex gapX="1" justify="center" align="center" gridColumn="2" wrap="wrap">
      <Box asChild>
        <Text size="7" weight="bold" wrap="nowrap">
          {currencyCode} {amount}
        </Text>
      </Box>
      <Box asChild>
        <Text size="2" weight="semibold">
          {checkoutType}
        </Text>
      </Box>
    </Flex>
  );
};

export const productCheckout: Story = {
  args: {
    showIcon: false,
    closeIcon: false,
    title: '',
    type: 'info',
    autoHide: false,
    duration: 5000,
    children: <ProductCheckoutComponent />,
    minWidth: { initial: '100%', xs: '328px' },
  },
};

const CheckoutSuccessComponent = () => {
  const name = 'Goat';
  return (
    <Box className="sponsorName">
      <Text size="5" weight="bold">
        {name}
      </Text>
    </Box>
  );
};

export const checkoutSuccess: Story = {
  args: {
    showIcon: true,
    leftIcon: false,
    closeIcon: false,
    title: '',
    type: 'success',
    autoHide: false,
    duration: 5000,
    children: <CheckoutSuccessComponent />,
    minWidth: { initial: '100%', xs: '328px' },
  },
};
