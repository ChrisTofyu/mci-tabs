import FormFooter from './FormFooter';
import { StoryObj, Meta } from '@storybook/react';

const meta = {
  title: 'Library/Molecules/FormFooter',
  component: FormFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    content: {
      control: { type: 'text' },
    },
    linkText: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    href: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof FormFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

const description = 'With your help, we can end poverty—for good.';
export const SignUpWithTextLink: Story = {
  args: {
    content: "Don't have an account?",
    linkText: 'Sign Up',
    description: description,
  },
};
export const SignUpWithHyperLink: Story = {
  args: {
    content: "Don't have an account?",
    linkText: 'Sign Up',
    description: description,
    href: 'https://dev-aem.worldvision.ca/en/register.html',
  },
};
