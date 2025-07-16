import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TextAndImage from './TextAndImage';
import { Theme } from '@radix-ui/themes';

const meta = {
  title: 'Library/Molecules/Cards/TextAndImage',
  component: TextAndImage,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <Theme
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: '#f7f7f7',
        }}
      >
        <Story />
      </Theme>
    ),
  ],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['deafult', 'surface'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['auto', '1', '2'],
    },
    headline: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    icon: {
      control: {
        type: 'text',
      },
    },
    image: {
      control: {
        type: 'object',
      },
    },
  },
  args: {
    variant: 'default',
    size: 'auto',
  },
} satisfies Meta<typeof TextAndImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    headline: 'Title Max 5 Lines',
    description: 'Description copy of no more than 5 lines',
    icon: 'icon-book',
  },
};

export const TextPlusImage: Story = {
  args: {
    headline: 'Title Max 5 Lines',
    description: 'Description copy of no more than 5 lines',
    image: {
      src: 'https://s3-alpha-sig.figma.com/img/0509/f8d9/3ea4462d6ad870c4dbf84df9cbcc4c34?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p24CVG1watK-yODauTuzzRpz~ZxVBfirQCE0g-AQ-k5iMIJu5yeaQtHBzf13lJ-wErpAdyKqfutdWQTEH53TiQDJlr7bHFR2g-EqIWKYbi~GFH3qTzI3FnmJtRubW6MV6VgDjItnuPNy~~Ja88hjDJ1T9hlTqi0fAKJknWp8My1-6b43pRFL6wYPe55Qd~TMTupF~jcaW7UOf775cP9lHx-KwYk7-SadUt3q9OEbY0dWE86n0GznDkc3RnRDJ0dpHm3NupNAUHn53paDykZRABBJHHVF9o6EoJ2XAZIaJugBuup3b5SlyCP7-jkbCS1ZhEx7gT5zwqxeD0Yc2LZ~fg__',
      alt: 'alternate image text - Partial Image',
    },
  },
};

export const Image: Story = {
  args: {
    image: {
      src: 'https://s3-alpha-sig.figma.com/img/0509/f8d9/3ea4462d6ad870c4dbf84df9cbcc4c34?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p24CVG1watK-yODauTuzzRpz~ZxVBfirQCE0g-AQ-k5iMIJu5yeaQtHBzf13lJ-wErpAdyKqfutdWQTEH53TiQDJlr7bHFR2g-EqIWKYbi~GFH3qTzI3FnmJtRubW6MV6VgDjItnuPNy~~Ja88hjDJ1T9hlTqi0fAKJknWp8My1-6b43pRFL6wYPe55Qd~TMTupF~jcaW7UOf775cP9lHx-KwYk7-SadUt3q9OEbY0dWE86n0GznDkc3RnRDJ0dpHm3NupNAUHn53paDykZRABBJHHVF9o6EoJ2XAZIaJugBuup3b5SlyCP7-jkbCS1ZhEx7gT5zwqxeD0Yc2LZ~fg__',
      alt: 'alternate image text 0 - Full Image',
    },
  },
};
