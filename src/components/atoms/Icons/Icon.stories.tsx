import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';

const meta = {
  title: 'Library/Atoms/Icons',
  component: Icon,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      description:
        'Icon name can be given along with icon prefix text eg(icon-eye)',
      control: {
        type: 'text',
      },
    },
    size: {
      description: 'Icon size',
      control: {
        type: 'text',
      },
    },
    iconWidth: {
      description: 'Icon size',
      control: {
        type: 'text',
      },
    },
    iconHeight: {
      description: 'Icon size',
      control: {
        type: 'text',
      },
    },
    color: {
      description: 'Icon color',
      control: 'color',
    },
    className: {
      description: 'Icon container class name to customize the icons',
      control: {
        type: 'text',
      },
    },
    backgroundColor: {
      description: 'Icon Background',
      control: 'color',
    },
    backgroundSize: {
      control: 'text',
    },
    backgroundPadding: {
      control: 'text',
    },
    rounded: {
      description:
        'To determine the icon Shape needs to be displayed as rounded or not',
      control: 'boolean',
    },
    link: {
      description: '',
      control: 'object',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const icon: Story = {
  args: {
    name: 'icon-eye',
    size: '40',
    color: '#000',
    className: '',
    backgroundColor: '',
    backgroundSize: '',
    backgroundPadding: '',
    rounded: true,
  },
};

export const iconWithLink: Story = {
  args: {
    name: 'icon-eye',
    size: '40',
    color: '#000',
    className: '',
    backgroundColor: '',
    backgroundSize: '',
    backgroundPadding: '',
    rounded: true,
    link: {
      href: 'https://www.google.com/',
      target: '_blank',
    },
  },
};
