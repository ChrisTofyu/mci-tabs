import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Theme from '@radix-styles/atoms/Theme';
import List from './List';

import ListImage from '../../../assets/images/ListImage.svg';

const meta = {
  title: 'Library/Molecules/List',
  component: List,
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
    data: {
      control: {
        type: 'object',
      },
    },
    keyMapper: {
      control: {
        type: 'object',
      },
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
    },
    listType: {
      control: 'select',
      options: ['default', 'modal'],
    },
  },
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;
export const DonationHistory: Story = {
  args: {
    data: [
      {
        name: 'Raw Hope monthly pledge',
        amount: 59.0,
        date: 'Dec 28, 2023',
      },
      {
        name: 'Water Appeal Christmas Donation',
        amount: 49.0,
        date: 'Nov 28, 2023',
      },
      {
        name: 'Monthly gift',
        amount: 59.0,
        date: 'Aug 28, 2023',
      },
      {
        name: 'One time gift',
        amount: 120.0,
        date: 'Aug 28, 2023',
      },
      {
        name: 'Areas of Most Need',
        amount: 120.0,
        date: 'Aug 28, 2023',
      },
      {
        name: 'Israel/Gaza Fund',
        amount: 120.0,
        date: 'Aug 28, 2023',
      },
      {
        name: 'Childcare Pledge Support',
        amount: 49.0,
        date: 'Aug 28, 2023',
      },
      {
        name: 'Monthly gift',
        amount: 59.0,
        date: 'Aug 29, 2023',
      },
      {
        name: 'Monthly gift',
        amount: 59.0,
        date: 'Aug 28, 2023',
      },
      {
        name: 'Monthly gift',
        amount: 59.0,
        date: 'Aug 28, 2023',
      },
    ],
    keyMapper: {
      title: 'name',
      subTitle: 'date',
      endContent: 'amount',
    },
    size: 'small',
    loadMore: {
      text: 'Load More',
      isVisible: true,
      onClick: () => {
        console.log('Load More');
      },
    },
  },
};
export const SponsorChild: Story = {
  args: {
    data: [
      {
        name: 'Raw Hope monthly pledge',
        url: ListImage,
        date: 'Dec 28, 2023',
        tagUrl:
          'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
        tagLabel: 'Letter to Ashraful',
      },
      {
        name: 'Water Appeal Christmas Donation',
        url: ListImage,
        date: 'Nov 28, 2023',
        tagUrl:
          'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
        tagLabel: 'Letter to Ashraful',
      },
      {
        name: 'Monthly gift',
        url: ListImage,
        date: 'Aug 28, 2023',
        tagUrl:
          'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
        tagLabel: 'Letter to Ashraful',
      },
      {
        name: 'One time gift',
        url: ListImage,
        date: 'Aug 28, 2023',
        tagUrl:
          'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
        tagLabel: 'Letter to Ashraful',
      },
      {
        name: 'Areas of Most Need',
        url: ListImage,
        date: 'Aug 28, 2023',
        tagUrl:
          'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
        tagLabel: 'Letter to Ashraful',
      },
      {
        name: 'Israel/Gaza Fund',
        url: ListImage,
        date: 'Aug 28, 2023',
        tagUrl:
          'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
        tagLabel: 'Letter to Ashraful',
      },
      {
        name: 'Childcare Pledge Support',
        url: ListImage,
        date: 'Aug 28, 2023',
        tagUrl:
          'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
        tagLabel: 'Letter to Ashraful',
      },
      {
        name: 'Monthly gift',
        url: ListImage,
        date: 'Aug 29, 2023',
        tagUrl:
          'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
        tagLabel: 'Letter to Ashraful',
      },
      {
        name: 'Monthly gift',
        url: ListImage,
        date: 'Aug 28, 2023',
        tagUrl:
          'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
        tagLabel: 'Letter to Ashraful',
      },
      {
        name: 'Monthly gift',
        url: ListImage,
        date: 'Aug 28, 2023',
        tagUrl:
          'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
        tagLabel: 'Letter to Ashraful',
      },
    ],
    keyMapper: {
      title: 'name',
      subTitle: 'date',
      endContent: 'url',
      tagURL: 'tagUrl',
      tagLabel: 'tagLabel',
    },
    size: 'small',
    endContent: 'image',
    loadMore: {
      text: 'Load More',
      isVisible: true,
      onClick: () => {
        console.log('Load More');
      },
    },
  },
};

export const ChildDetail: Story = {
  args: {
    size: 'small',
    data: [
      {
        title: 'Family',
        value: 'Lives with parents. 2 brothers and one sister.',
      },
      {
        title: 'Birthday',
        value: 'Nov 14, 2013',
      },
      {
        title: 'Education',
        value: 'Grade 4',
      },
      {
        title: 'Interests',
        value: 'Cricket',
      },
      {
        title: 'Current health',
        value: 'In good health.',
      },
      {
        title: 'Label',
        value: 'Content',
      },
    ],
    keyMapper: {
      title: 'title',
      subTitle: 'value',
    },
    listType: 'modal',
  },
};

export const ChildrenList: Story = {
  args: {
    size: 'small',
    listType: 'modal',
    data: [
      {
        title: 'Ashraful Siam',
        value: '10 years old · Ukhiya, Bangladesh',
        avatar:
          'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
      },
      {
        title: 'Sofia Dariani',
        value: '4 years old · Quito, Equador',
        avatar:
          'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop',
      },
    ],
    keyMapper: {
      title: 'title',
      subTitle: 'value',
      avatar: 'avatar',
    },
    addMore: {
      isVisible: true,
      text: 'Sponsor Another Child',
      onClick: () => {
        console.log('Sponsor Another Child');
      },
    },
  },
};
