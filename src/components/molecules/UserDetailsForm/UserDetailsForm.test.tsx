import React from 'react';
import { render } from '@testing-library/react';
import UserDetailsForm from './UserDetailsForm';

describe('UserDetailsForm', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(
      <UserDetailsForm
        onSubmit={data => console.log(data)}
        onBackBtnClick={() => {}}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
