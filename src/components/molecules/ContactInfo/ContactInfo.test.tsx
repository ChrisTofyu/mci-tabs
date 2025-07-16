import React from 'react';
import { render } from '@testing-library/react';
import ContactInfo from './ContactInfo';

describe('ContactInfo', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(
      <ContactInfo
        title="Contact"
        description="Phone numbers"
        text="Edit"
        textSave="Save"
        textCancel="Cancel"
        formData={{ primaryPhone: '1234567890', alternatePhone: '' }}
        onSubmit={data => console.log(data)}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
