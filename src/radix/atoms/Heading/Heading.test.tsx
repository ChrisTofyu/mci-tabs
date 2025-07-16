import React from 'react';
import Heading from './Heading';
import { render } from '@testing-library/react';

describe('Heading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Heading />);
    expect(baseElement).toMatchSnapshot();
  });
});
