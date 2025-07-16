import React from 'react';
import { render } from '@testing-library/react';
import DataCard from './DataCard';

describe('Data Card', () => {
  it('Should Default Variant render successfully', () => {
    const { baseElement } = render(
      <DataCard
        content="Our livelihood improvement programs enable millions globally to reach better outcomes"
        heading="4M+"
        logoName="water"
        logoText="Water"
        size="1"
        subHeading="People served"
        variant="default"
      />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Should Surface Variant render successfully', () => {
    const { baseElement } = render(
      <DataCard
        content="Our livelihood improvement programs enable millions globally to reach better outcomes"
        heading="4M+"
        logoName="food"
        logoText="Food"
        size="1"
        subHeading="People served"
        variant="surface"
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
