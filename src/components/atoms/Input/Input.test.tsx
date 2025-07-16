import React from 'react';
import Input from './Input';
import { render } from '@testing-library/react';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input name="test-1" />);
    expect(baseElement).toMatchSnapshot();
  });
});
