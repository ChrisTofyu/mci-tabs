import React from 'react';
import { render } from '@testing-library/react';
import Tag from './Tag';

describe('Tag', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<Tag text="Text" />);
    expect(baseElement).toMatchSnapshot();
  });
});
