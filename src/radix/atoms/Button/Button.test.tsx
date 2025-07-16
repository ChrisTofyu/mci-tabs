import React from 'react';
import Button from './Button';
import { render } from '@testing-library/react';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button text="Button" />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render outline button successfully', () => {
    const { baseElement } = render(<Button text="Button" mode="outline" />);
    expect(baseElement).toMatchSnapshot();
  });
});
