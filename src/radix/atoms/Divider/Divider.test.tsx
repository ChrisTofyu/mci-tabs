import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Divider } from './Divider';

describe('Divider Component', () => {
  it('renders a horizontal divider with default properties', () => {
    render(<Divider orientation="horizontal" />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('divider-horizontal');
    expect(divider).toHaveClass('divider-size-1');
    expect(divider).toHaveStyle('height: 1px');
    expect(divider).toHaveStyle('width: 16px');
  });

  it('renders a vertical divider with default properties', () => {
    render(<Divider orientation="vertical" />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('divider-vertical');
    expect(divider).toHaveClass('divider-size-1');
    expect(divider).toHaveStyle('width: 1px');
    expect(divider).toHaveStyle('height: 16px');
  });

  it('renders a vertical divider with size 3 (64px height)', () => {
    render(<Divider orientation="vertical" size={3} />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveStyle('height: 64px');
    expect(divider).toHaveClass('divider-size-3');
  });

  it('renders a horizontal divider with size 2 (32px width)', () => {
    render(<Divider orientation="horizontal" size={2} />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveStyle('width: 32px');
    expect(divider).toHaveClass('divider-size-2');
  });

  it('renders a horizontal divider with size 4 (fills container)', () => {
    render(<Divider orientation="horizontal" size={4} />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('divider-fill');
    expect(divider).toHaveStyle('width: 100%');
    expect(divider).toHaveStyle('min-width: 128px');
  });

  it('renders a vertical divider with size 4 (fills container)', () => {
    render(<Divider orientation="vertical" size={4} />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('divider-fill');
    expect(divider).toHaveStyle('height: 100%');
    expect(divider).toHaveStyle('min-height: 128px');
  });

  it('applies the correct color (primary)', () => {
    render(<Divider color="primary" />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('divider-primary');
  });

  it('applies the correct color (inverse)', () => {
    render(<Divider color="inverse" />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('divider-inverse');
  });

  it('renders with default props when none are provided', () => {
    render(<Divider />);
    const divider = screen.getByRole('separator');
    expect(divider).toHaveClass('divider-horizontal');
    expect(divider).toHaveClass('divider-primary');
    expect(divider).toHaveStyle('width: 16px');
    expect(divider).toHaveStyle('height: 1px');
  });

  it('falls back to default values when given invalid props', () => {
    // @ts-expect-error – intentionally incorrect props
    render(<Divider orientation="diagonal" size={99} color="rainbow" />);
    const divider = screen.getByRole('separator');

    expect(divider).toHaveClass('divider-horizontal');
    expect(divider).toHaveClass('divider-primary');
    expect(divider).toHaveClass('divider-size-1');
    expect(divider).toHaveStyle('width: 16px');
    expect(divider).toHaveStyle('height: 1px');
  });

  it('has the correct ARIA role', () => {
    render(<Divider />);
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<Divider />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
