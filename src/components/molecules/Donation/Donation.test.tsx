import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Donation, DonationProps } from './Donation';

describe('Donation Component', () => {
  const mockOnDonate = jest.fn();

  const defaultProps: DonationProps = {
    titleConfig: {
      text: 'Support Our Mission',
    },
    frequencies: ['One-time', 'Monthly'],
    amounts: [500, 1000, 1500],
    onDonate: mockOnDonate,
    buttonProps: {
      text: 'Donate Now',
    },
  };

  beforeEach(() => {
    mockOnDonate.mockClear();
  });

  it('renders title and options correctly', () => {
    render(<Donation {...defaultProps} />);
    expect(screen.getByText('Support Our Mission')).toBeInTheDocument();
    expect(screen.getByText('One-time')).toBeInTheDocument();
    expect(screen.getByText('Monthly')).toBeInTheDocument();
    expect(screen.getByText('$500')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Custom amount')).toBeInTheDocument();
  });

  it('calls onDonate with selected amount and frequency', () => {
    render(<Donation {...defaultProps} />);
    fireEvent.click(screen.getByText('$1000'));
    fireEvent.click(screen.getByText('Donate Now'));
    expect(mockOnDonate).toHaveBeenCalledWith(1000, 'One-time');
  });

  it('calls onDonate with custom amount if entered', () => {
    render(<Donation {...defaultProps} />);
    fireEvent.change(screen.getByPlaceholderText('Custom amount'), {
      target: { value: '777' },
    });
    fireEvent.click(screen.getByText('Donate Now'));
    expect(mockOnDonate).toHaveBeenCalledWith(777, 'One-time');
  });

  it('updates input field when toggle amount is selected', () => {
    render(<Donation {...defaultProps} />);
    fireEvent.click(screen.getByText('$1500'));
    const input = screen.getByPlaceholderText(
      'Custom amount'
    ) as HTMLInputElement;
    expect(input.value).toBe('1500');
  });

  it('clears toggle selection when custom amount does not match', () => {
    render(<Donation {...defaultProps} />);
    fireEvent.click(screen.getByText('$1000'));
    const input = screen.getByPlaceholderText('Custom amount');
    fireEvent.change(input, { target: { value: '888' } });
    fireEvent.click(screen.getByText('Donate Now'));
    expect(mockOnDonate).toHaveBeenCalledWith(888, 'One-time');
  });

  it('switches frequency correctly', () => {
    render(<Donation {...defaultProps} />);
    fireEvent.click(screen.getByText('Monthly'));
    fireEvent.click(screen.getByText('Donate Now'));
    expect(mockOnDonate).toHaveBeenCalledWith(500, 'Monthly');
  });

  it('shows placeholder in custom input when empty', () => {
    render(<Donation {...defaultProps} />);
    const input = screen.getByPlaceholderText(
      'Custom amount'
    ) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('');
  });
});

describe('Donation Component Snapshot', () => {
  const mockOnDonate = jest.fn();

  const snapshotProps: DonationProps = {
    titleConfig: {
      text: 'Support Our Mission',
    },
    frequencies: ['One-time', 'Monthly'],
    amounts: [500, 1000, 1500],
    onDonate: mockOnDonate,
    buttonProps: {
      text: 'Donate Now',
    },
  };

  it('matches snapshot', () => {
    const { asFragment } = render(<Donation {...snapshotProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
