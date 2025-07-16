import React from 'react';
import { LoginForm } from '@world-vision/wv360-core-library';

import './SignUpPage.scss';

const SignUpPage: React.FC = () => {
  return (
    <>
      <div className="background"></div>
      <div className="sign-up">
        <LoginForm
          emailPlaceholder="Email address"
          forgotPassText="I forgot my password"
          onSubmit={function qu() {}}
          passwordPlaceholder="Password"
          text="Sign Up"
        />
      </div>
    </>
  );
};

export default SignUpPage;
