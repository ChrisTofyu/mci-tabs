import { Meta, StoryObj } from '@storybook/react';
import GiftDetail from './GiftDetail';
import FallbackImage from '@assets/images/FallbackImage.svg';

export const singleGiftData = {
  image:
    'https://s3-alpha-sig.figma.com/img/5dde/a548/b4bd3ee0b9db2ca002f11f8868399260?Expires=1748822400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E2cuCFo0fsFFPa1fyTqZ3w9cNIEA5bGQYWYjS5flghG6-N9blzHYU-CjH2sHbATqZOR8EN6HTt1rrG0cHQQ9aO~AKdojKKcKk1852ZJTl2HMpAngvP1aaT7e3xztAky53aUsbhz7ifQg0Lm3uKdkQBX2yQ0lj1RBLhpVe~mg8y5URAb2u96PnRvNGZUtLeaumITLo9nfoajPDVk8h979REixSZZz5qXbrniYmMQN~~OxYxXzK3Zyf5cfnelq-QFE86gLdh8gIp47nFiVSxlhg7T97aeTWupuPdjRx33YfNAjVQmvD-GJGavslpJr4K2LdCH0YyWA1U2ndT37rhGdMw__',
  imageFallback: FallbackImage,
  imageAltText: 'Gift Image',
  name: 'Goats, Hens and Roosters',
  price: '150',
  details:
    'The crack of an egg. The first tiny chirp of a newborn chick. These small delights bring joy to children and families who receive hens and a rooster. Better yet, these wonderful birds provide an ongoing source of income, food rich in protein, vitamins and nutrients, and health for growing girls and boys—so their dreams can take flight.',
  currency: '$',
  buttonText: 'Buy this gift',
};

const meta = {
  title: 'Library/Organisms/Hero/GiftDetail',
  component: GiftDetail,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      description: 'Image of the child',
      control: { type: 'text' },
    },
    imageFallback: {
      control: 'text',
    },
    imageAltText: {
      control: 'text',
    },
    name: {
      description: 'Name of the child',
      control: { type: 'text' },
    },
    price: {
      description: 'Price of the Gift',
      control: { type: 'text' },
    },
    details: {
      description: 'Details of the child',
      control: { type: 'text' },
    },
    currency: {
      description: 'Currency of the Gift amount',
      control: { type: 'text' },
    },
    buttonText: {
      description: 'Button text',
      control: { type: 'text' },
    },
    buttonOnClick: {
      description: 'Button onClick handler',
    },
  },
  excludeStories: ['singleGiftData'],
  args: {
    currency: '$',
    buttonText: 'Buy this gift',
    buttonOnClick: () => console.log('Button clicked'),
  },
} satisfies Meta<typeof GiftDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SingleGiftDetail: Story = {
  args: { ...singleGiftData },
};
