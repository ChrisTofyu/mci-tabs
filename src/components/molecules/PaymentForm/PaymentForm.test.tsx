import React from 'react';
import { render } from '@testing-library/react';
import PaymentForm from './PaymentForm';

describe('PaymentForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PaymentForm
        publishkey="pk_test_oKhSR5nslBRnBZpjO6KuzZeX"
        clientid=""
        amount={100}
        currency="usd"
        buttonLabelText=""
        onDonateClick={() => {}}
        onBackBtnClick={() => {}}
      />
    );
    expect(baseElement).toMatchSnapshot();
  });
});
