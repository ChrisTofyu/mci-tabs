import React from 'react';
import VideoPlayer from './VideoPlayer';
import { render } from '@testing-library/react';

describe('VideoPlayer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <VideoPlayer src="https://www.youtube.com/" />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
