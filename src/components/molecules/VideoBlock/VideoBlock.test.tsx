import React from 'react';
import VideoBlock from './VideoBlock';
import { render } from '@testing-library/react';

describe('VideoBlock', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <VideoBlock src="https://www.youtube.com/" size={'lg'} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
