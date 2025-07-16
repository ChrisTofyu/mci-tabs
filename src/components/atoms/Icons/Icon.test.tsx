import React from 'react';
import Icon from './Icon';
import { render } from '@testing-library/react';

describe('Icon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon name="icon-eye" />);
    expect(baseElement).toMatchSnapshot();
  });
});
