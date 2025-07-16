import { Meta, StoryObj } from '@storybook/react';
import ProductCard from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Library/Molecules/Cards/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['1', '2'],
    },
    imageSrc: {
      control: 'text',
    },
    imageAlt: {
      control: 'text',
    },
    productName: {
      control: 'text',
    },
    productPrice: {
      control: 'text',
    },
    button: {
      control: {
        type: 'object',
        fields: {
          text: {
            control: 'text',
            description: 'Button label text',
          },
          mode: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary', 'ghost'],
            description: 'Button visual style',
          },
          size: {
            control: 'select',
            options: ['xl', 'lg', 'md', 'sm'],
            description: 'Button size',
          },
          disabled: {
            control: 'boolean',
            description: 'Disable button state',
          },
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Size1: Story = {
  args: {
    size: '1',
    imageSrc: 'https://www.gstatic.com/webp/gallery/1.jpg',
    imageAlt: 'Placeholder Image',
    productName: 'Elegant Mug',
    productPrice: '₹499',
    button: {
      text: 'View Product',
      mode: 'primary',
      size: 'xl',
      onClick: () => alert('Size 1 product card CTA clicked!'),
    },
  },
};

export const Size2: Story = {
  args: {
    size: '2',
    imageSrc: 'https://www.gstatic.com/webp/gallery/1.jpg',
    imageAlt: 'Placeholder Image',
    productName: 'Smart Water Bottle',
    productPrice: '₹1,299',
    button: {
      text: 'Add to Cart',
      mode: 'primary',
      size: 'xl',
      onClick: () => alert('Size 2 product card CTA clicked!'),
    },
  },
};
