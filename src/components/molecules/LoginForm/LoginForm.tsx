import React, { ReactElement, useEffect, useState } from 'react';
import Link from '@radix-styles/atoms/Link';
import Flex from '@radix-styles/atoms/Flex';
import Button from '@radix-styles/atoms/Button';
import Input from '@components/atoms/Input';
import { FormErrorProps } from '@internal/types/common';
import { useForm, FieldValues } from 'react-hook-form';
import styles from './LoginForm.module.scss';
import CalloutMolecule, { CalloutProps } from '@radix-styles/molecules/Callout';

/**
 * @interface
 * The Forgot Password Form props type of {@link LoginForm}.
 */
interface ForgotPasswordObjProps {
  hidePassword?: boolean;
  emptyEmailWarning?: string;
}

/**
 * @interface
 * The Form props type of {@link LoginForm}.
 */
export interface LoginFormProps {
  /**
   * Placeholder for Email input for the login screen
   * @property
   */
  emailPlaceholder?: string;
  /**
   * Placeholder for Password input for the login screen
   * @property
   */
  passwordPlaceholder?: string;
  /**
   * Pass button text label, if need to display.
   * @property
   */
  text: string;
  /**
   * Text for the Hyperlink to forgot password screen
   * @property
   */
  forgotPassText?: string;
  /**
   * Function to handle form submission
   * @property
   */
  onSubmit: (data: FieldValues) => void;
  onClick?: () => void;
  /**
   * Errors that will be shown if any occur
   * @property
   */
  formError?: FormErrorProps;
  /**
   * It is to enable and disable the Spinner.
   * @property
   */
  loading?: boolean;
  /**
   * To Passing hyper link to navigate the page
   * @property
   */
  href?: string | undefined;
  /**
   * The object that helps to config the login form for Fotgot Password
   * @property
   */
  forgotPasswordObj?: ForgotPasswordObjProps;
  /**
   * The object that helps to show the server error message in callout
   * @property
   */
  calloutObj?: CalloutProps;
}

/**
 * LoginForm component
 *
 * @group Molecules
 * @category Component
 *
 * @param {LoginFormProps} props - The LoginForm props
 * @returns {ReactElement} - LoginForm Component
 */
export const LoginForm = ({
  text,
  forgotPassText,
  onSubmit,
  onClick,
  formError,
  loading = false,
  emailPlaceholder = '',
  passwordPlaceholder = '',
  href = '',
  forgotPasswordObj = {},
  calloutObj,
}: LoginFormProps): ReactElement => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    setError,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: 'onBlur',
  });
  const [status, setStatus] = useState<number | undefined>(undefined);

  const { hidePassword, emptyEmailWarning } = forgotPasswordObj;

  useEffect(() => {
    if (formError?.field && formError.message) {
      reset(getValues());
      setError(formError.field, {
        type: 'server',
        message: formError.message,
      });
      setStatus(formError.status);
    }
  }, [formError, reset, setError]);

  let updatedCalloutObj: CalloutProps = calloutObj || {
    type: 'error',
    isVisible: true,
    title: '',
    children: '',
  };

  if (
    errors.email?.type === 'required' &&
    hidePassword &&
    emptyEmailWarning &&
    updatedCalloutObj != null
  ) {
    updatedCalloutObj = {
      ...updatedCalloutObj,
      showIcon: true,
      type: 'error',
      isVisible: true,
      leftIcon: true,
      title: '',
      children: emptyEmailWarning,
    };
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {updatedCalloutObj !== null && updatedCalloutObj?.children !== '' && (
        <CalloutMolecule {...updatedCalloutObj} />
      )}
      <Input
        label="Email Address"
        name="email"
        placeholder={emailPlaceholder}
        rules={{
          pattern: {
            message: 'Please check your email again for any errors.',
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          },
          required: hidePassword
            ? 'This field is required'
            : 'Email is required',
        }}
        register={register}
        error={errors}
        status={status}
        type="text"
        setValue={setValue}
      />
      {!hidePassword && (
        <Input
          label="Password"
          name="password"
          placeholder={passwordPlaceholder}
          rules={{
            required: 'Password is required',
          }}
          register={register}
          error={errors}
          type="password"
          setValue={setValue}
        />
      )}
      {forgotPassText && !hidePassword && (
        <Flex display={'flex'} justify={'end'}>
          <Link
            onClick={onClick}
            targetHref={href}
            className={styles.forgotPass}
          >
            {forgotPassText}
          </Link>
        </Flex>
      )}
      <Button text={text} className={styles.loginBtn} disabled={loading} />
    </form>
  );
};

export default LoginForm;
