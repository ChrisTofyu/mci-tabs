import React from 'react';
import CardContainer from './CardContainer';
import { Meta, StoryObj } from '@storybook/react';
import Greetings from '@components/molecules/Greetings/Greetings';
import LoginForm from '@components/molecules/LoginForm';
import { Theme } from '@radix-ui/themes';
import Flex from '@radix-styles/atoms/Flex';

const meta = {
  title: 'Library/Molecules/CardContainer',
  component: CardContainer,
  decorators: [
    Story => (
      <Theme>
        <Flex display="flex" justify="center">
          <Story />
        </Flex>
      </Theme>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    contentClassName: {
      control: 'text',
    },
  },
} satisfies Meta<typeof CardContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

// Greetings Component props
const content =
  'World Vision Canada is a Christian relief, development, and advocacy organization working to create lasting change in the lives of children and families. (To accommodate up to five lines of text).';
const title = 'Welcome back!';
const align = 'center';

const LoginContent = () => (
  <>
    <Greetings title={title} content={content} align={align} />
    <LoginForm
      emailPlaceholder="Email address"
      passwordPlaceholder="Password"
      text="Login"
      forgotPassText="I forgot my password"
      onSubmit={data => console.log(data)}
    />
  </>
);

export const SignIn: Story = {
  args: {
    children: <LoginContent />,
  },
};
