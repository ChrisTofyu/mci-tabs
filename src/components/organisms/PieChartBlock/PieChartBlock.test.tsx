import React from 'react';
import { render, screen } from '@testing-library/react';
import PieChartBlock from './PieChartBlock';
import '@testing-library/jest-dom'; // Ensure jest-dom is available

const mockData = [
  {
    label: 'Field programs and advocacy',
    value: 84.9,
    color: '#ec6707',
    description: 'Impact of field programs and advocacy',
  },
  {
    label: 'Emergency response',
    value: 60,
    color: '#ff6b6b',
    description: 'Impact of emergency response',
  },
  {
    label: 'Education and training',
    value: 45,
    color: '#4db8ff',
    description: 'Impact of education and training',
  },
];

describe('PieChartBlock', () => {
  test('does not render charts if no data is provided', () => {
    render(<PieChartBlock data={[]} heading="How we use your donations" />);

    const noDataMessage = screen.getByText(/No data available/i);
    expect(noDataMessage).toBeInTheDocument();
  });

  test('renders disclaimer with link if linkUrl and linkDescription are provided', () => {
    render(
      <PieChartBlock
        data={mockData}
        heading="How we use your donations"
        linkUrl="https://example.com"
        linkDescription="Learn more about our work"
      />
    );

    const linkElement = screen.getByRole('link', {
      name: /Learn more about our work/i,
    });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
  });

  test('does not render disclaimer if linkUrl and linkDescription are not provided', () => {
    render(
      <PieChartBlock data={mockData} heading="How we use your donations" />
    );

    const linkElement = screen.queryByRole('link');
    expect(linkElement).not.toBeInTheDocument();
  });
});
