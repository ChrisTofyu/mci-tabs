import React from 'react';
import { render } from '@testing-library/react';
import ScrollableHorizontal from './ScrollableHorizontal';
import DataCard from '@components/molecules/DataCard';

describe('Scrollable Horizontal Component', () => {
  beforeAll(() => {
    Element.prototype.scrollIntoView = jest.fn();
    Element.prototype.scrollTo = jest.fn();

    Object.defineProperty(
      globalThis as unknown as { ResizeObserver?: jest.Mock },
      'ResizeObserver',
      {
        writable: true,
        configurable: true,
        value: jest.fn(() => ({
          observe: jest.fn(),
          unobserve: jest.fn(),
          disconnect: jest.fn(),
        })),
      }
    );
  });

  afterAll(() => {
    jest.restoreAllMocks();
    delete (globalThis as unknown as { ResizeObserver?: jest.Mock })
      .ResizeObserver;
  });

  it('Should Primary mode render successfully', () => {
    const { baseElement } = render(
      <ScrollableHorizontal
        description="Discover our global impact and collective support for communities."
        heading="Impact Summary"
        itemsLength={1}
        mode="primary"
        name="child"
        showDescription
      >
        <DataCard
          content="Our livelihood improvement programs enable millions globally to reach better outcomes"
          heading="4M+"
          logoName="food"
          logoText="Food"
          size="1"
          subHeading="People served"
          variant="surface"
        />
      </ScrollableHorizontal>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Should Inverse mode render successfully', () => {
    const { baseElement } = render(
      <ScrollableHorizontal
        description="Discover our global impact and collective support for communities."
        heading="Impact Summary"
        itemsLength={1}
        mode="inverse"
        name="test"
        showDescription
      >
        <DataCard
          content="Our livelihood improvement programs enable millions globally to reach better outcomes"
          heading="4M+"
          logoName="water"
          logoText="Water"
          size="1"
          subHeading="People served"
          variant="default"
        />
      </ScrollableHorizontal>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
