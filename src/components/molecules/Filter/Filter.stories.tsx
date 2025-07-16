import type { Decorator, Meta, StoryObj } from '@storybook/react';
import Filter from '@components/molecules/Filter';
import React from 'react';

import {
  countryFilterOptions,
  genderFilterOptions,
  ageFilterOptions,
} from './constants';

import { fn } from '@storybook/test';
import { Theme } from '@radix-ui/themes';

// export required data to be used in the stories
import { childProfiles } from '../../organisms/Hero/ChildProfile/ChildProfile.stories';

const Decorators: Decorator = Story => (
  <div>
    <Theme>
      <Story />
    </Theme>
  </div>
);

const meta = {
  title: 'Library/Molecules/Filter',
  component: Filter,
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: {
        type: 'object',
      },
    },
    countryFilterOptions: {
      control: {
        type: 'select',
        options: countryFilterOptions,
      },
    },
    genderFilterOptions: {
      control: {
        type: 'select',
        options: genderFilterOptions,
      },
    },
    ageFilterOptions: {
      control: {
        type: 'select',
        options: ageFilterOptions,
      },
    },
    applyFilter: fn(),
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    agePlaceholder: {
      control: {
        type: 'text',
      },
    },
    countryPlaceholder: {
      control: {
        type: 'text',
      },
    },
    genderPlaceholder: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: Decorators,
} satisfies Meta<typeof Filter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const filterStory: Story = {
  args: {
    data: childProfiles,
    countryFilterOptions: countryFilterOptions,
    countryPlaceholder: 'All Country',
    genderFilterOptions: genderFilterOptions,
    genderPlaceholder: 'All Gender',
    ageFilterOptions: ageFilterOptions,
    agePlaceholder: 'All Age',
    title: 'Find another match',
    description: 'children are waiting to be sponsored',
    applyFilter: data => {
      console.log('Apply Filter', data);
    },
  },
};
