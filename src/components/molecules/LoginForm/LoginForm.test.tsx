import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(
      <LoginForm
        forgotPassText="Forgot your password?"
        text="Sign In"
        onSubmit={data => console.log(data)}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
