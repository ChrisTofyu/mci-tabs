import React from 'react';
import { render } from '@testing-library/react';
import PasswordVerificationForm from './PasswordVerificationForm';

describe('PasswordVerificationForm', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(
      <PasswordVerificationForm onSubmit={data => console.log(data)} />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
