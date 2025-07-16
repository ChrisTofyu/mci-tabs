import React from 'react';
import { render } from '@testing-library/react';
import ScrollArea from './ScrollArea';
import Flex from '../Flex';
import Text from '../Text';

describe('ScrollArea Component', () => {
  beforeAll(() => {
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

  it('Should Horizontal Scroll render successfully', () => {
    const { baseElement } = render(
      <ScrollArea
        size="2"
        style={{
          height: 150,
          width: 600,
        }}
        type="always"
      >
        <Flex gap="4" p="2" width="700px">
          <Text as="p" size="2" trim="both">
            {`Three fundamental aspects of typography are legibility, readability, and
                aesthetics. Although in a non-technical sense "legible" and "readable"
                are often used synonymously, typographically they are separate but
                related concepts.`}
          </Text>

          <Text as="p" size="2" trim="both">
            {`Legibility describes how easily individual characters can be
                distinguished from one another. It is described by Walter Tracy as "the
                quality of being decipherable and recognisable". For instance, if a "b"
                and an "h", or a "3" and an "8", are difficult to distinguish at small
                sizes, this is a problem of legibility.`}
          </Text>
        </Flex>
      </ScrollArea>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
