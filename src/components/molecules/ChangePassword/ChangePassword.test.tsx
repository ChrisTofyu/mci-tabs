import React from 'react';
import { render } from '@testing-library/react';
import { ChangePassword } from './ChangePassword';

describe('ChangePassword', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(
      <ChangePassword
        title="Password"
        currentPasswordLabel="Current Password"
        currentPasswordPlaceholder="Current Password"
        isUserprofile={true}
        passwordLabel="New Password"
        passwordPlaceholder="New Password"
        confirmPasswordLabel="Confirm New Password"
        reEnterpasswordPlaceholder="Confirm New Password"
        buttonLabel="Submit"
        onSubmit={() => console.log('submitted')}
        onCancel={() => console.log('cancelled')}
        analyticsProps={{ form: 'changepassword', type: 'changepassword' }}
        formSubmitStatus={false}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
