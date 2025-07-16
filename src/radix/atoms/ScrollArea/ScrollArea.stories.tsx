import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Theme from '@radix-styles/atoms/Theme';
import Text from '../Text';
import ScrollArea from './ScrollArea';
import Flex from '../Flex';

// Sample contents
const ScrollAreachildrenContent = (
  <>
    <Text as="p" size="2" trim="both">
      {`Three fundamental aspects of typography are legibility, readability, and
      aesthetics. Although in a non-technical sense "legible" and "readable"
      are often used synonymously, typographically they are separate but
      related concepts.`}
    </Text>

    <Text as="p" size="2" trim="both">
      {`Legibility describes how easily individual characters can be
      distinguished from one another. It is described by Walter Tracy as "the
      quality of being decipherable and recognisable". For instance, if a "b"
      and an "h", or a "3" and an "8", are difficult to distinguish at small
      sizes, this is a problem of legibility.`}
    </Text>
  </>
);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Library/Atoms/ScrollArea',
  component: ScrollArea,
  decorators: [
    Story => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['1', '2'],
    },
    type: {
      control: {
        type: 'select',
      },
      options: ['always', 'auto', 'hover', 'scroll'],
    },
    orientation: {
      control: {
        type: 'select',
      },
      options: ['horizontal', 'vertical', 'both'],
    },
    hideScrollbar: {
      control: 'boolean',
    },
  },
  // more on args: https://storybook.js.org/docs/writing-stories/args#args-object
  args: {
    type: 'auto',
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Horizontal: Story = {
  args: {
    size: '2',
    type: 'always',
    style: { height: 150, width: 600 },
    children: (
      <Flex gap="4" p="2" width="700px">
        {ScrollAreachildrenContent}
      </Flex>
    ),
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    style: { height: 200, width: 600 },
    children: (
      <Flex p="2" pr="8" direction="column" gap="4">
        {ScrollAreachildrenContent}
        {ScrollAreachildrenContent}
      </Flex>
    ),
  },
};

export const Both: Story = {
  args: {
    size: '2',
    orientation: 'both',
    style: {
      height: 200,
      width: 600,
      paddingRight: '30px',
      paddingBottom: '30px',
    },
    children: (
      <Flex direction="column" gap="4" p="3" pb="5">
        <Text as="p" size="2" trim="both" style={{ width: 700 }}>
          {`Three fundamental aspects of typography are legibility, readability, and
      aesthetics. Although in a non-technical sense "legible" and "readable"
      are often used synonymously, typographically they are separate but
      related concepts.`}
        </Text>
        {ScrollAreachildrenContent}
        <Text as="p" size="2" trim="both" style={{ width: 700 }}>
          {`Three fundamental aspects of typography are legibility, readability, and
      aesthetics. Although in a non-technical sense "legible" and "readable"
      are often used synonymously, typographically they are separate but
      related concepts.`}
        </Text>
      </Flex>
    ),
  },
};
