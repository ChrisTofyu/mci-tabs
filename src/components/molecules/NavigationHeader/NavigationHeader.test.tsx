import React from 'react';
import { render } from '@testing-library/react';
import NavigationHeader, { NavigationData } from './NavigationHeader';
import { ButtonProps } from '@radix-styles/atoms/Button';

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
      name: 'Ways to Give',
      fragmentId: 'wvc/ways-to-give',
      path: '/en/give',
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

describe('Navigation Header', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<NavigationHeader />);
    expect(baseElement).toMatchSnapshot();
  });
  it('Should render successfully with nav data', () => {
    const { baseElement } = render(
      <NavigationHeader navLinks={navigationData} />
    );
    expect(baseElement).toMatchSnapshot();
  });
  it('Should render successfully with nav data and button data', () => {
    const { baseElement } = render(
      <NavigationHeader navLinks={navigationData} buttonData={buttonData} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
