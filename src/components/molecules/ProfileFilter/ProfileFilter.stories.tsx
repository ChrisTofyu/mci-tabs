import React from 'react';
import type { Decorator, Meta, StoryObj } from '@storybook/react';
import ProfileFilter from '@components/molecules/ProfileFilter';
import {
  ageFilterOptions,
  countryFilterOptions,
  genderFilterOptions,
} from '../Filter/constants';

// export required data to be used in the stories
import { childProfiles } from '../../organisms/Hero/ChildProfile/ChildProfile.stories';

import { Theme } from '@radix-ui/themes';

const Decorators: Decorator = Story => (
  <Theme>
    <Story />
  </Theme>
);

const meta = {
  title: 'Library/Molecules/ProfileFilter',
  component: ProfileFilter,
  tags: ['autodocs'],
  decorators: Decorators,
} satisfies Meta<typeof ProfileFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filter: Story = {
  args: {
    data: childProfiles,
    country: countryFilterOptions,
    gender: genderFilterOptions,
    age: ageFilterOptions,
    title: 'Find another match',
    description: '1,504 children are waiting to be sponsored',
  },
};
