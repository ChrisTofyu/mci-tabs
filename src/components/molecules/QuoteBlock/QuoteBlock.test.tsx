import React from 'react';
import QuoteBlock from './QuoteBlock';
import { render } from '@testing-library/react';

describe('QuoteBlock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuoteBlock quoteText="Quote Block text" />);
    expect(baseElement).toMatchSnapshot();
  });
});
