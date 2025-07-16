import React from 'react';
import Embed from './Embed';
import { render } from '@testing-library/react';

describe('Embed', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Embed src="https://widget.tagembed.com/2169076" size="1" />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
