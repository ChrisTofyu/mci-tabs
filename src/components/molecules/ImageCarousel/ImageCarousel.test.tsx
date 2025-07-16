import React from 'react';
import { render } from '@testing-library/react';
import ImageCarousel from './ImageCarousel';

// Mock
window.HTMLElement.prototype.scrollIntoView = jest.fn();
window.HTMLElement.prototype.scrollTo = jest.fn();
globalThis.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('ImageSlide', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ImageCarousel
        slides={[
          {
            src: 'https://dummyimage.com/872x470/000/fff&text=1+Image',
            tooltipTitle: '1',
            tooltip: 'Tooltip 1',
          },
          {
            src: 'https://dummyimage.com/872x470/122/fff&text=2+Image',
            tooltipTitle: '2',
            tooltip: 'Tooltip 2',
          },
          {
            src: 'https://dummyimage.com/872x470/222/fff&text=3+Image',
            tooltipTitle: '3',
            tooltip: 'Tooltip 3',
          },
          {
            src: 'https://dummyimage.com/872x470/999/fff&text=4+Image',
            tooltipTitle: '4',
            tooltip: 'Tooltip 4',
          },
          {
            src: 'https://dummyimage.com/872x470/300/fff&text=5+Image',
            tooltipTitle: '5',
            tooltip: 'Tooltip 5',
          },
        ]}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
