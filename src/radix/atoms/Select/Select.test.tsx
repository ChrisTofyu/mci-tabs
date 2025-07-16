import React from 'react';
import { render } from '@testing-library/react';
import Select from './Select';
import { selectOptions } from './constants';

describe('Select', () => {
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

  it('Should Default Variant render successfully', () => {
    const { baseElement } = render(
      <Select
        name="Service"
        onChange={() => {}}
        options={selectOptions}
        placeholder="Select option..."
        required
        size="2"
        value="2023"
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
