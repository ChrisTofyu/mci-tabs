import React from 'react';
import TextAndImage from './TextAndImage';
import { render } from '@testing-library/react';

describe('Truncate', () => {
  it('should render Text & Icon successfully', () => {
    const { baseElement } = render(
      <TextAndImage
        headline="Title Max 5 Lines"
        description="Description copy of no more than 5 lines"
        icon="icon-book"
      />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should render Text & Image successfully', () => {
    const { baseElement } = render(
      <TextAndImage
        headline="Title Max 5 Lines"
        description="Description copy of no more than 5 lines"
        icon="icon-book"
      />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should render Image successfully', () => {
    const { baseElement } = render(
      <TextAndImage
        headline="Title Max 5 Lines"
        description="Description copy of no more than 5 lines"
        icon="icon-book"
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
