import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard, { ProductCardProps } from './ProductCard';
import '@testing-library/jest-dom';

describe('ProductCard', () => {
  const onClickMock = jest.fn();

  const defaultProps: ProductCardProps = {
    size: '1',
    imageSrc: 'test-image.jpg',
    imageAlt: 'Test Image',
    productName: 'Test Product',
    productPrice: '$9.99',
    button: {
      text: 'Buy Now',
      onClick: onClickMock,
    },
  };

  beforeEach(() => {
    onClickMock.mockClear();
  });

  it('renders product details correctly in size "1" (compact layout)', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$9.99')).toBeInTheDocument();
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
    expect(screen.getByText('Buy Now')).toBeInTheDocument();
  });

  it('handles CTA click in size "1" layout', () => {
    render(<ProductCard {...defaultProps} />);
    fireEvent.click(screen.getByText('Buy Now'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders correctly and handles CTA click in size "2" (horizontal layout)', () => {
    render(
      <ProductCard
        {...{
          ...defaultProps,
          size: '2',
          imageSrc: 'https://via.placeholder.com/440x440',
          imageAlt: 'Smart Bottle',
          productName: 'Smart Water Bottle',
          productPrice: '₹1,299',
          button: {
            text: 'View Product',
            onClick: onClickMock,
          },
        }}
      />
    );

    expect(screen.getByText('Smart Water Bottle')).toBeInTheDocument();
    expect(screen.getByText('₹1,299')).toBeInTheDocument();
    expect(screen.getByAltText('Smart Bottle')).toBeInTheDocument();
    expect(screen.getByText('View Product')).toBeInTheDocument();

    fireEvent.click(screen.getByText('View Product'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
