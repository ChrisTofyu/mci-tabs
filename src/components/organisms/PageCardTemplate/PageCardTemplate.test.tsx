import React from 'react';
import { render } from '@testing-library/react';
import PageCardTemplate from './PageCardTemplate';
import backgroundImage from '@assets/images/WholeGlobe.svg';

describe('Login Page', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(
      <PageCardTemplate backgroundImageUrl={backgroundImage}>
        {'Hi'}
      </PageCardTemplate>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
