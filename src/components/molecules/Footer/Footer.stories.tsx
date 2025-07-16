import Footer from './Footer';
import { Meta, StoryObj } from '@storybook/react';

const iconGroupStoriesData = [
  {
    name: 'icon-accredited-member',
    alt: 'Accredited Member',
    iconWidth: '135',
    iconHeight: '40',
    link: {
      href: '#',
      target: '_blank',
    },
  },
  {
    name: 'icon-imagine-canada',
    alt: 'Imagine Canada',
    iconWidth: '135',
    iconHeight: '40',
    link: {
      href: '#',
      target: '_blank',
    },
  },

  {
    name: 'icon-humanitarian-coalition-member',
    alt: 'p4',
    iconWidth: '135',
    iconHeight: '40',
    height: '40px',
    width: '135px',
    link: {
      href: '#',
      target: '_blank',
    },
  },
];

const footerLinks = [
  { text: 'Accessibility' },
  { text: 'Safeguarding' },
  { text: 'Privacy & Security' },
  { text: 'Terms and Conditions' },
  { text: 'Cookie & Web Technologies' },
];

const Content = [{ text: 'Charitable Registration Number: 119304855RR0001' }];

const SocialButtonIcon = [
  {
    name: 'icon-social-facebook',
    size: '24',
    color: '#000',
    rounded: true,
    backgroundColor: '#fff',
    backgroundSize: '44px',
    link: { href: '#', target: '_blank' },
  },
  {
    name: 'icon-social-youtube',
    size: '24',
    color: '#000',
    rounded: true,
    backgroundColor: '#fff',
    backgroundSize: '44px',
    link: { href: '#', target: '_blank' },
  },
  {
    name: 'icon-social-twitter',
    size: '24',
    color: '#000',
    rounded: true,
    backgroundColor: '#fff',
    backgroundSize: '44px',
    link: { href: '#', target: '_blank' },
  },
  {
    name: 'icon-social-instagram',
    size: '24',
    color: '#000',
    rounded: true,
    backgroundColor: '#fff',
    backgroundSize: '44px',
    link: { href: '#', target: '_blank' },
  },
];

const meta = {
  title: 'Library/Molecules/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: {
        type: 'text',
      },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
    logoType: {
      options: ['light', 'dark'],
      control: { type: 'select' },
    },
    color: {
      control: { type: 'color' },
    },
    imageColor: {
      control: { type: 'color' },
    },
    Content: {
      control: { type: 'object' },
    },
    contactInfo: {
      control: { type: 'text' },
    },
    socialButtons: {
      control: { type: 'object' },
    },
    ImgContent: {
      control: { type: 'text' },
    },
    links: {
      control: { type: 'object' },
    },
    ImageIcon: {
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FooterConcept: Story = {
  args: {
    className: '',
    backgroundColor: '#000',
    logoType: 'light',
    color: '#fff',
    imageColor: '#fff',
    Content: Content,
    contactInfo: '1.866.595.5550',
    socialButtons: SocialButtonIcon,
    ImgContent:
      'We are proud to be reviewed and held accountable by these independent third-party organizations:',
    links: footerLinks,
    ImageIcon: iconGroupStoriesData,
  },
};
