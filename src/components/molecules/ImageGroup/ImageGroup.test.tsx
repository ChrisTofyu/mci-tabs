import React from 'react';
import ImageGroup from './ImageGroup';
import { render } from '@testing-library/react';
import { imageGroupStoriesData } from './ImageGroup.stories';

describe('ImageGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageGroup data={imageGroupStoriesData} />);
    expect(baseElement).toMatchSnapshot();
  });
});
