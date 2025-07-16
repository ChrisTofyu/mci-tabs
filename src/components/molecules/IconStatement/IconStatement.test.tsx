import React from 'react';
import IconStatement from './IconStatement';
import { render } from '@testing-library/react';

describe('Icon Statement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <IconStatement
        backgroundColor="#E86100"
        iconName="icon-poverty"
        heading="Be an agent of change"
        description="When you sponsor a child, you are helping to break the cycle of poverty."
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
