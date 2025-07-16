import React from 'react';
import Grid from './Grid';
import { render } from '@testing-library/react';

describe('Grid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Grid />);
    expect(baseElement).toMatchSnapshot();
  });
});
