import React from 'react';
import { render } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<Navigation />);
    expect(baseElement).toMatchSnapshot();
  });
});
