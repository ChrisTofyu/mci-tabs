import React from 'react';
import { render } from '@testing-library/react';
import AddressForm from './AddressForm';

describe('Address Form', () => {
  it('Should Address Form render successfully', () => {
    const { baseElement } = render(
      <AddressForm
        address={{
          city: 'BRAMPTON',
          country: 'Canada',
          postalCode: 'L6S3J9',
          province: 'ON',
          streetDirection: 'West',
          streetName: 'ASHTON',
          streetNumber: '142',
          streetType: 'CRES',
          unit: '56A',
        }}
        autoFillText="Enter address automatically"
        description="Start typing your address and we can auto-fill the rest"
        manualEntryDescription="Please enter your address"
        manualEntryText="Enter address manually"
        onSubmit={() => {}}
        prefixText="or"
        title="Address"
        formSubmitStatus={false}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
