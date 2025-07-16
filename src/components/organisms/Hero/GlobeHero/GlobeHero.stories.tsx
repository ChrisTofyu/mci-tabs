import GlobeHero from './GlobeHero';
import { StoryObj, Meta } from '@storybook/react';

import GlobeHeroImage from '@assets/images/GlobeHero.svg';

const meta = {
  title: 'Library/Organisms/Hero/GlobeHero',
  component: GlobeHero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: { control: 'text' },
    subTitle: { control: 'text' },
    description: { control: 'text' },
    progressValue: { control: 'number' },
    globeHeroImage: { control: 'text' },
    goalLabel: { control: 'text' },
    goalValue: { control: 'text' },
    progressLabel: { control: 'text' },
    lives: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof GlobeHero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GlobeHeroOrganism: Story = {
  args: {
    title: '7.6 Million',
    subTitle: 'People Reached Globally',
    description: 'Your support is transforming lives around the world.',
    progressValue: 33,
    globeHeroImage: GlobeHeroImage,
    goalLabel: 'Our 2025 Goal:',
    goalValue: 'Reach 7 Million Lives',
    progressLabel: 'Overall Progress',
    lives: '3.01 million lives',
  },
};
