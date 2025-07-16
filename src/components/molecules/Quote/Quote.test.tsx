import React from 'react';
import Quote from './Quote';
import { render } from '@testing-library/react';

describe('Quote', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Quote quoteText="Quote text" />);
    expect(baseElement).toMatchSnapshot();
  });
});
