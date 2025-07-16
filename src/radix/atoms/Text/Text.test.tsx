import React from 'react';
import { render } from '@testing-library/react';
import Text from './Text';

describe('Text', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<Text>Text</Text>);
    expect(baseElement).toMatchSnapshot();
  });
});
