import React from 'react';
import { render } from '@testing-library/react';
import HeroBasic from './HeroBasic';

describe('HeroBasic', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<HeroBasic title="" description="" />);
    expect(baseElement).toMatchSnapshot();
  });
});
