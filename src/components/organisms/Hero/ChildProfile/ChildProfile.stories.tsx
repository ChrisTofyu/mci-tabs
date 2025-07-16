import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ChildProfile from '@components/organisms/Hero/ChildProfile';
import { Gender } from './ChildProfile';
import { Theme } from '@radix-ui/themes';

export const childProfiles = [
  {
    name: 'Child 1',
    country: 'USA',
    gender: 'Boy',
    age: 12,
    src: 'https://images.pexels.com/photos/2113709/pexels-photo-2113709.jpeg',
  },
  {
    name: 'Child 2',
    country: 'India',
    gender: 'Girl',
    age: 8,
    src: 'https://images.pexels.com/photos/5604955/pexels-photo-5604955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Child 3',
    country: 'USA',
    gender: 'Boy',
    age: 20,
    src: 'https://images.pexels.com/photos/2531985/pexels-photo-2531985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Child 4',
    country: 'England',
    gender: 'Girl',
    age: 23,
    src: 'https://images.pexels.com/photos/4568731/pexels-photo-4568731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Child 5',
    country: 'Africa',
    gender: 'Boy',
    age: 10,
    src: 'https://images.pexels.com/photos/1068209/pexels-photo-1068209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Library/Organisms/Hero/ChildProfile',
  component: ChildProfile,
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
  excludeStories: ['childProfiles'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // more on args: https://storybook.js.org/docs/writing-stories/args#args-object
  argTypes: {
    country: {
      description: 'Country of the child',
      control: {
        type: 'text',
      },
    },
    age: {
      description: 'Age of the child',
      control: {
        type: 'number',
      },
    },
    gender: {
      description: 'Gender of the child',
      options: ['girl', 'boy'],
      control: { type: 'select' },
    },
    childImage: {
      description: 'Image of the child',
      control: { type: 'text' },
    },
    name: {
      description: 'Name of the child',
      control: { type: 'text' },
    },
    details: {
      description: 'Details of the child',
      control: { type: 'text' },
    },
    videoSrc: {
      description: 'Video of the child',
      control: { type: 'text' },
    },
    descriptions: {
      description: 'Information about the child country',
      control: {
        type: 'object',
      },
    },
    childrenProfiles: {
      description: 'List of childrens profile data',
      control: {
        type: 'object',
      },
    },
  },
  args: {
    country: childProfiles[0].country,
    age: childProfiles[0].age,
    gender: childProfiles[0].gender as Gender,
    childImage: childProfiles[0].src,
    name: childProfiles[0].name,
    details:
      'My name is Ashraful Siam. I live with my parents. I have 2 brothers and one sister. I am in Grade 4. I am currently enrolled in primary school and my favourite subject is my national language. I like to play cricket. I am in good health.',
    videoSrc: 'https://www.youtube.com/embed/J2ogs029GVg?si=GRnGAS3WvToc-CXL',
    descriptions: [
      'Despite the recent strengthening of child protection laws, children in Bolivia continue to face abuse and exploitation. Domestic violence and school bullying are widespread in the country. Women and girls are especially at risk of violence and sexual assault.',
      'Bolivia has the seventh highest income inequality in the world and nearly half of Bolivians live in poverty. More than one million children work instead of going to school and are often exploited. An estimated one quarter of Bolivian children under the age of five suffer from stunting.',
      'In Bolivia, 1 in 3 children are engaged in child labor. Child labor is most prevalent in rural areas, where children work in agriculture, mining, and domestic service. Children are also exploited in the commercial.',
      'Bolivia has the highest rate of child labor in South America. Child labor is most prevalent in rural areas, where children work in agriculture, mining, and domestic service. Children are also exploited in the commercial.',
    ],
    onDonateClick: () => {},
  },
} satisfies Meta<typeof ChildProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Profile: Story = {
  args: {
    childrenProfiles: childProfiles,
  },
};

export const FindAnotherChild: Story = {
  args: {
    childrenProfiles: [],
  },
};
