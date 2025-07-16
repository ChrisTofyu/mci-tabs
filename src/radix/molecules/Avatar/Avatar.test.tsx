import React from 'react';
import Avatar from './Avatar';
import { render } from '@testing-library/react';

describe('Avatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Avatar fallback="" />);
    expect(baseElement).toMatchSnapshot();
  });
});
