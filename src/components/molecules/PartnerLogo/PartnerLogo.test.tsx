import React from 'react';
import PartnerLogo from './PartnerLogo';
import { render } from '@testing-library/react';

describe('PartnerLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PartnerLogo />);
    expect(baseElement).toMatchSnapshot();
  });
});
