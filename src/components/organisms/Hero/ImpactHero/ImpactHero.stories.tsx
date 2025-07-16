import ImpactHero from './ImpactHero';
import { StoryObj, Meta } from '@storybook/react';

import PeopleHeroImage from '@assets/images/PeopleHero.svg';

const meta = {
  title: 'Library/Organisms/Hero/ImpactHero',
  component: ImpactHero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: { control: 'text' },
    subTitle: { control: 'text' },
    description: { control: 'text' },
    ImpactHeroImage: { control: 'text' },
    className: { control: 'text' },
    bottomDesc: { control: 'text' },
    bottomTitle: { control: 'text' },
    bottomAmount: { control: 'text' },
  },
} satisfies Meta<typeof ImpactHero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PersonHeroOrganism: Story = {
  args: {
    title: '1',
    subTitle: 'person reached globally',
    description: 'You’re not just donating—you’re transforming lives.',
    ImpactHeroImage: PeopleHeroImage,
    bottomDesc:
      'Did you know: for every $50-$100 donated, a new life is reached!',
  },
};

export const PeopleHeroOrganism: Story = {
  args: {
    title: '54',
    subTitle: 'people reached globally',
    description: 'You’re not just donating—you’re transforming lives.',
    ImpactHeroImage: PeopleHeroImage,
    bottomDesc: 'For every $50-$100 donated, a new life is reached!',
    bottomTitle: 'My donations this year',
    bottomAmount: '$500',
  },
};
