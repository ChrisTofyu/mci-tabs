import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // ✅ Required for custom matchers like toBeInTheDocument
import PieChart, { DonationImpactProps } from './PieChart';

const mockData: DonationImpactProps = {
  value: 75,
  description:
    'This is a test description to check the truncation logic of the text inside the circle',
  color: '#ff6347',
  size: '2',
};

describe('Chart component', () => {
  it('renders the chart with the correct percentage value', () => {
    render(<PieChart data={mockData} />);
    expect(screen.getByText(/75%/)).toBeInTheDocument();
  });

  it('applies the correct size class based on the "size" prop', () => {
    const { container } = render(<PieChart data={mockData} />);
    expect(container.firstChild).toHaveClass('size2');
  });

  it('truncates description to 40 characters followed by ellipsis', () => {
    render(<PieChart data={mockData} />);
    const truncatedText = screen.getByText(
      /This is a test description to check the/
    );
    expect(truncatedText).toHaveTextContent(
      'This is a test description to check the…'
    );
  });

  it('renders the background circle and progress arc correctly', () => {
    const { container } = render(<PieChart data={mockData} />);
    const circles = container.querySelectorAll('circle');
    expect(circles.length).toBe(2);
    expect(circles[0]).toHaveAttribute('stroke', '#eee');
    expect(circles[1]).toHaveAttribute('stroke', mockData.color);
  });

  it('matches snapshot for size2', () => {
    const { container } = render(<PieChart data={mockData} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
