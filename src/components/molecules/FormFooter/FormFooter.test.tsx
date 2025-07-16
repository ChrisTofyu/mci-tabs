import React from 'react';
import { render } from '@testing-library/react';
import FormFooter from './FormFooter';

describe('FormFooter', () => {
  it('Should render successfully', () => {
    const { baseElement } = render(
      <FormFooter content="Don't have an account?" linkText="Sign Up" />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
