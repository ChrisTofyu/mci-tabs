import React from 'react';
import ProgressBar from './ProgressBar';
import { render } from '@testing-library/react';

describe('ProgressBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgressBar />);
    expect(baseElement).toMatchSnapshot();
  });
});
