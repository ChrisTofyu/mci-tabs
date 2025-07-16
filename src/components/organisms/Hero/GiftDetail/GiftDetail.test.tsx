import React from 'react';
import { render, screen } from '@testing-library/react';
import { GiftDetail } from './GiftDetail';
import { singleGiftData } from './GiftDetail.stories';

const defaultProps = {
  ...singleGiftData,
  buttonOnClick: jest.fn(),
};

describe('GiftDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GiftDetail {...defaultProps} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('calls buttonOnClick when button is clicked', () => {
    const button = screen.getByRole('button', {
      name: defaultProps.buttonText,
    });
    expect(button).toBeInTheDocument();
    button.click();
    expect(defaultProps.buttonOnClick).toHaveBeenCalledTimes(1);
  });
});
