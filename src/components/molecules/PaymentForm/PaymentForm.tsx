import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import {
  loadStripe,
  Stripe,
  StripeElementLocale,
  StripeElements,
  StripeElementsOptions,
  StripeError,
} from '@stripe/stripe-js';
import React, { FormEvent, ReactElement, useEffect, useState } from 'react';
import ButtonGroup from '@radix-styles/molecules/ButtonGroup';
import { useFindDeviceType } from '@utils/hooks';
import { FormAnalyticsProps } from '@internal/types/common';
import { AnalyticsHandler } from '@utils/Analytics';

import styles from './PaymentForm.module.scss';

export type onDonateClick = (
  stripe: Stripe | null,
  elements: StripeElements | null
) => void;

interface FormProps {
  /**
   * Client secret id to submit the payment through stripe
   * @property
   */
  clientId?: string;
  /**
   * Button label text for the donate button
   * @property
   */
  buttonText: string;
  /**
   * onDonateClick function to handle the donation click event
   * @property
   */
  onDonateClick: onDonateClick;
  /**
   * onBackBtnClick function to handle the back button click event
   * @property
   */
  onBackBtnClick: () => void;
  /**
   * Analytics properties for tracking form interactions
   * @property
   */
  analyticsProps?: FormAnalyticsProps | null;
}

const Form = ({
  clientId,
  buttonText,
  onDonateClick,
  onBackBtnClick,
  analyticsProps,
}: FormProps): ReactElement => {
  const elements = useElements();
  const stripe = useStripe();
  const { push } = AnalyticsHandler();

  const [isFormStarted, setIsFormStarted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const { isDesktop } = useFindDeviceType();
  const backIcon = isDesktop ? 'icon-arrow-left' : 'icon-chevron-left';

  const getFormData = (status: string) => ({
    form: {
      action: status,
      ...(analyticsProps ?? {}),
    },
    page: { page_url: window.location.href },
  });

  const triggerFormStartEvent = () => {
    if (!isFormStarted) {
      push('formstart', 'form initiation', { ...getFormData('form start') });
      setIsFormStarted(true);
    }
  };

  const onError = (error: { elementType: 'payment'; error: StripeError }) => {
    if (analyticsProps) {
      push('formerror', 'form load error', {
        error: { message: error.error.message ?? '' },
        ...getFormData('form load error'),
      });
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(clientId);
    if (!elements) {
      return;
    }
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
    }
  };

  return (
    <div className={styles.paymentFormContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <PaymentElement onFocus={triggerFormStartEvent} onLoadError={onError} />
        <ButtonGroup
          className={styles.donateBtnContainer}
          data={[
            {
              icon: backIcon,
              mode: 'outline',
              size: 'lg',
              type: 'button',
              onClick: () => onBackBtnClick(),
            },
            {
              text: buttonText,
              size: 'lg',
              type: 'submit',
              onClick: () => onDonateClick(stripe, elements),
            },
          ]}
        />
        {errorMessage && <div className="hidden error">{errorMessage}</div>}
      </form>
    </div>
  );
};

export interface PaymentFormProps {
  /**
   * Mode - Payment or Subscription
   * @property
   * @default 'payment'
   */
  mode?: 'payment' | 'subscription' | 'setup';
  /**
   * Locale for the payment form, default is 'auto' which will detect the locale of the browser. (e.g., en, fr, de, etc.) for the payment
   * @property
   */
  locale?: StripeElementLocale;
  /**
   * Publishkey for registered stripe account
   * @property
   */
  publishkey: string;
  /**
   * Client secret id to submit the payment through stripe
   * @property
   */
  clientid: string;
  /**
   * The amount to be charged.
   * @property
   */
  amount: number;
  /**
   * Currency code (e.g., usd). for the payment
   * @property
   */
  currency: string;
  /**
   * Button label text for the donate button
   * @property
   */
  buttonLabelText: string;
  /**
   * onDonateClick function to handle the donation click event
   * @property
   */
  onDonateClick: onDonateClick;
  /**
   * onBackBtnClick function to handle the back button click event
   * @property
   */
  onBackBtnClick: () => void;
  /**
   * Analytics properties for tracking form interactions
   * @property
   */
  analyticsProps?: FormAnalyticsProps | null;
}

export const PaymentForm = ({
  mode = 'payment',
  locale,
  publishkey,
  clientid,
  amount,
  currency,
  buttonLabelText,
  onDonateClick,
  onBackBtnClick,
  analyticsProps,
}: PaymentFormProps): ReactElement => {
  const [stripePromise, setStripePromise] =
    useState<Promise<Stripe | null> | null>(null);
  useEffect(() => {
    if (publishkey) {
      setStripePromise(loadStripe(publishkey));
    }
  }, [publishkey]);

  const options: StripeElementsOptions = {
    mode,
    locale,
    amount: amount,
    currency: currency,
    appearance: {
      labels: 'floating',
      variables: {
        borderRadius: '10px',
      },
    },
  };

  return (
    <>
      {stripePromise && (
        <Elements stripe={stripePromise} options={options}>
          <Form
            clientId={clientid}
            buttonText={buttonLabelText}
            onDonateClick={onDonateClick}
            onBackBtnClick={onBackBtnClick}
            analyticsProps={analyticsProps}
          />
        </Elements>
      )}
    </>
  );
};

export default PaymentForm;
