import React from 'react';
import { render } from '@testing-library/react';
import Greetings from './Greetings';

describe('Greetings', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(<Greetings title="Welcome back!" />);
    expect(baseElement).toMatchSnapshot();
  });
});
