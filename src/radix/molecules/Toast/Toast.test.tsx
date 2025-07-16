import React from 'react';
import { render } from '@testing-library/react';
import ToastMolecule from './Toast';

describe('ToastMolecule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ToastMolecule
        iconName="icon-info"
        alternateCloseIcon="icon-close"
        title="We're excited to see you again!"
        type="info"
        isVisible
        xPosition="center"
        yPosition="top"
      >
        Access your personalized dashboard, manage your preferences, and explore
        all the features we have to offer.
      </ToastMolecule>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
