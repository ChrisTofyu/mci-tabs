import React from 'react';
import { render } from '@testing-library/react';
import ImageSlide from './ImageSlide';

describe('ImageSlide', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ImageSlide
        index={1}
        src="image.png"
        tooltip="image 1"
        tooltipTitle="1"
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
