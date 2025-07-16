import React from 'react';
import { render } from '@testing-library/react';
import CalloutMolecule from './Callout';

describe('CalloutMolecule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CalloutMolecule
        iconName="icon-info"
        alternateCloseIcon="icon-close"
        title="Your subscription has expired"
        type="info"
        isVisible
      >
        Vitae adipiscing venenatis sodales sed accumsan cursus augue ornare ut.
        Ut. Sed quis integer nec est. Efficitur risus orci, in platea sodales
        ut.
      </CalloutMolecule>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
