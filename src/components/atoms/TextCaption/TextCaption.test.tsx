import React from 'react';
import TextCaption from './TextCaption';
import { render } from '@testing-library/react';

describe('TextCaption', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextCaption messages="Has Error" />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should support multiple errors', () => {
    const { baseElement } = render(<TextCaption messages={['Has Error']} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should return empty container when passing the empty data', () => {
    const { baseElement } = render(<TextCaption messages={null} />);
    expect(baseElement).toMatchSnapshot();
  });
});
