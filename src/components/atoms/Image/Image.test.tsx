import React from 'react';
import Image from './Image';
import { render } from '@testing-library/react';

describe('Image', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Image
        src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
        alt="Alt text"
        fallbackSrc=""
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
