import React from 'react';
import Truncate from './Truncate';
import { render } from '@testing-library/react';

describe('Truncate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Truncate width="110px" height="100px">
        This is a long text that will be truncated, eli, Find out more. So based
        on the height and width the extra text that will be truncated.
      </Truncate>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
