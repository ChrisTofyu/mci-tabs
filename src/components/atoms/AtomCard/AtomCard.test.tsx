import React from 'react';
import AtomCard from './AtomCard';
import { render } from '@testing-library/react';

describe('Atom Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AtomCard>
        <div>Card 1</div>
      </AtomCard>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
