import React from 'react';
import ButtonGroup from './ButtonGroup';
import { render } from '@testing-library/react';

describe('ButtonGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ButtonGroup
        data={[
          { text: 'Button ', icon: '+' },
          { icon: '+' },
          { text: 'Only Button' },
        ]}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
