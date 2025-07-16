import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Donation, DonationProps } from './Donation';

const meta: Meta<typeof Donation> = {
  title: 'Library/Molecules/Donation',
  component: Donation,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    titleConfig: {
      control: { type: 'object' },
      defaultValue: { text: 'Support Our Mission', size: '5', weight: 'bold' },
    },
    frequencies: {
      control: { type: 'object' },
      defaultValue: ['One-time', 'Monthly'],
    },
    amounts: {
      control: { type: 'object' },
      defaultValue: [500, 1000, 1500],
    },
    defaultCustomAmount: {
      control: { type: 'number' },
      defaultValue: 0,
    },
    onDonate: {
      action: 'donate-submitted',
    },
    buttonProps: {
      control: { type: 'object' },
      defaultValue: {
        text: 'Donate Now',
        size: 'xl',
        mode: 'primary',
        effects: 'special',
        icon: 'icon-arrow',
        iconLeft: false,
      },
    },
    size: {
      control: { type: 'radio' },
      options: ['sm-md', 'lg-xl'],
      defaultValue: 'sm-md',
    },
  },
};

export default meta;

type DonationStory = StoryObj<typeof Donation>;

const defaultArgs: DonationProps = {
  titleConfig: {
    text: 'Choose your donation',
    size: '5',
    weight: 'bold',
  },
  frequencies: ['One-time', 'Monthly'],
  amounts: [25, 50, 100],
  defaultCustomAmount: 0,
  onDonate: action('donate-submitted'),
  buttonProps: {
    text: 'Donate Now',
    size: 'xl',
    mode: 'primary',
    effects: 'special',
    icon: 'icon-arrow',
    iconLeft: false,
  },
  size: 'sm-md',
};

export const Default: DonationStory = {
  args: {
    ...defaultArgs,
  },
};
