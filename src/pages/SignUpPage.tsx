import React from 'react';
import { LoginForm } from '@world-vision/wv360-core-library';
import { Image } from '@world-vision/wv360-core-library';
import { Input } from '@world-vision/wv360-core-library';
import { Button } from '@world-vision/wv360-core-library';

import './SignUpPage.scss';

const SignUpPage: React.FC = () => {
  const backgroundStyle = {
    backgroundImage: "url('/sign-in.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '35% center',
    height: '100vh', // Full screen
  };
  return (
    <>
      <div style={backgroundStyle}>
        <div className="right-container">
          <div className="container">
            <div className="logo">
              {' '}
              <Image
                src="/Logo.svg"
                alt="Logo"
                fallbackSrc="/Mark.svg"
                width="12vw"
                height="12vh"
              ></Image>
            </div>
            <div className="title">
              <h1 className="sign-up-title">Sign Up</h1>
              <p>Welcome to Tabs for Good! Let's create an account.</p>
            </div>
            <div className="sign-up">
              <Input
                label="First and Last Name"
                name="name"
                type="text"
              ></Input>
              <Input
                label="Username"
                name="example"
                placeholder="Enter text here"
                type="text"
              />
              <Input
                label="Email Input"
                name="email"
                placeholder="Enter email address"
                rules={{
                  pattern: {
                    message: 'Enter a valid email address',
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  },
                  required: 'Email is required',
                }}
                type="email"
              />
              <Input
                label="Password Input"
                name="password"
                placeholder="Enter Password"
                rules={{
                  required: 'Email is required',
                }}
                type="password"
              />
              <Input
                label="Confirm Password"
                name="password-verification"
                placeholder="Confirm Password"
                rules={{
                  required: 'Password is required',
                }}
                type="password"
                className="input"
              ></Input>
              <div className="privacy">
                We'll never share your details. <br />
                See our <strong> Privacy Policy</strong>
              </div>
              <Button
                mode="primary"
                size="xl"
                text="Create Account"
                style={{ width: '19vw' }}
              />
              <div>
                {' '}
                Already have an account? <u>Log in</u>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
