import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SubscriptionCard from './SubscriptionCard';
import Theme from '@radix-styles/atoms/Theme';
import childImg from '@assets/images/childImage.svg';
import fallbackImage from '@assets/images/FallbackImage.svg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Library/Molecules/Cards/SubscriptionCard',
  component: SubscriptionCard,
  decorators: [
    Story => (
      <Theme>
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
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    fallbackImage: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    location: {
      control: 'text',
    },
    dateOfBirth: {
      control: 'text',
    },
    cardType: {
      control: 'select',
      options: ['childSponsorship', 'addOn', 'sponsorChild'],
    },
    onCardClick: {
      control: 'object',
    },
    locationIconName: {
      control: 'text',
    },
    dateOfBirthIconName: {
      control: 'text',
    },
  },
  // more on args: https://storybook.js.org/docs/writing-stories/args#args-object
  args: {
    cardType: 'childSponsorship',
  },
} satisfies Meta<typeof SubscriptionCard>;

export default meta;

type Story = StoryObj<typeof SubscriptionCard>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const ChildSponsorship: Story = {
  args: {
    cardType: 'childSponsorship',
    src: childImg,
    alt: 'Child avatar unavailable',
    fallbackImage: fallbackImage,
    title: 'Bryner James',
    description: 'Sponsored since 2025',
    location: 'Guatemala',
    dateOfBirth: 'Oct 15, 2016',
  },
};

export const AddOn: Story = {
  args: {
    cardType: 'addOn',
    src: childImg,
    alt: 'Child avatar unavailable',
    fallbackImage: fallbackImage,
    title: 'Raw Hope',
    description: 'Supporter since 2020',
  },
};

export const SponsorChild: Story = {
  args: {
    cardType: 'sponsorChild',
    title: 'Sponsor a child',
    description: 'Change one more life—for good.',
    onCardClick: () => console.log('Clicked'),
  },
};
