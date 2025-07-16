import type {
  Decorator,
  Meta,
  ReactRenderer,
  StoryObj,
  StrictArgs,
} from '@storybook/react';
import NavigationHeader, { NavigationData } from './NavigationHeader';
import { ButtonProps } from '@radix-styles/atoms/Button';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { PartialStoryFn } from 'storybook/internal/types';

const navigationData: NavigationData = {
  navigation: [
    {
      name: 'Home',
      fragmentId: '/en/home',
      path: '/en/home',
      navigable: true,
      children: [],
    },
    {
      name: 'Learn',
      fragmentId:
        '/content/dam/wvc/EN/context-specific-content/one-off-pages/learn/body/container',
      path: '/en/learn',
      navigable: true,
      children: [],
    },
    {
      name: 'Stories',
      fragmentId: 'en/stories',
      path: '/en/stories',
      navigable: true,
      children: [],
    },
  ],
};

const buttonData: Array<ButtonProps> = [
  {
    text: 'Sign Up',
    mode: 'primary',
    size: 'sm',
    onClick: () => {
      console.log('Button clicked');
    },
  },
];

const RouterProvider: Decorator = Story => {
  const [key, setKey] = useState(0);
  const style = { margin: '10px' };

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [Story]);

  return (
    <Router key={key}>
      <RouterContent Story={Story} style={style} />
    </Router>
  );
};

const RouterContent = ({
  Story,
  style,
}: {
  Story: PartialStoryFn<ReactRenderer, StrictArgs>;
  style: React.CSSProperties;
}) => {
  const navigate = useNavigate();

  const onNavLinkClick = (path: string) => {
    console.log(`Navigating to: ${path}`);
    navigate(path);
  };

  const onLogoClick = () => {
    navigate(navigationData.navigation[0].path);
  };

  return (
    <>
      <Story onNavLinkClick={onNavLinkClick} onLogoClick={onLogoClick} />
      <Routes>
        <Route
          path={navigationData.navigation[0].path}
          element={<div style={style}>{navigationData.navigation[0].name}</div>}
        />
        <Route
          path={navigationData.navigation[1].path}
          element={<div style={style}>{navigationData.navigation[1].name}</div>}
        />
        <Route
          path={navigationData.navigation[2].path}
          element={<div style={style}>{navigationData.navigation[2].name}</div>}
        />
      </Routes>
    </>
  );
};

const meta = {
  title: 'Library/Molecules/NavigationHeader',
  component: NavigationHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: { type: 'text' } },
    logoAltText: { control: { type: 'text' } },
  },
  args: {
    className: '',
    logoAltText: 'logo',
    navLinks: navigationData,
    buttonData: buttonData,
  },
  decorators: [RouterProvider],
} satisfies Meta<typeof NavigationHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationHeaderView: Story = {
  args: {},
};
