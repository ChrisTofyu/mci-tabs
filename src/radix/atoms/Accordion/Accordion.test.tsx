import React from 'react';
import Accordion from './Accordion';
import { render } from '@testing-library/react';

describe('Accordion', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Accordion
        items={[
          {
            value: 'item-1',
            title: 'Getting Started with the Basics',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non risus in orci varius accumsan. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
          },
          {
            value: 'item-2',
            title: 'Advanced Techniques and Tips',
            content:
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
          },
          {
            value: 'item-3',
            title: 'Troubleshooting Common Issues',
            content:
              'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.',
          },
          {
            value: 'item-4',
            title: 'Best Practices and Final Thoughts',
            content:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
          },
        ]}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('should not render successfully when the items are not available', () => {
    const { baseElement } = render(<Accordion items={[]} />);
    expect(baseElement).toMatchSnapshot();
  });
});
