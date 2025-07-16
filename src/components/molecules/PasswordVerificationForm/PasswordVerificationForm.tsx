import React, { ReactElement, useEffect, useId, useState } from 'react';
import { useForm, FieldValues, useController } from 'react-hook-form';
import Input from '@components/atoms/Input';
import ButtonGroup from '@radix-styles/molecules/ButtonGroup';
import { FormAnalyticsProps, FormErrorProps } from '@internal/types/common';
import { IconStatement } from '@components/molecules/IconStatement';
import { classNames } from '@utils/common/classNames';

import styles from './PasswordVerificationForm.module.scss';
import AnalyticsHandler from '@utils/Analytics/AnalyticsHandler';
import { ButtonProps } from '@radix-styles/atoms/Button';
import Box from '@radix-styles/atoms/Box';

/**
 * @interface
 * The Form props type of {@link PasswordVerificationForm}.
 */
export interface PasswordVerificationFormProps {
  /**
   * Label for the password input field
   *  @property
   * */
  currentPasswordLabel?: string;
  /**
   * Placeholder for Password input
   * @property
   */
  currentPasswordPlaceholder?: string;
  /**
   * Label for the password input field
   *  @property
   * */
  passwordLabel?: string;
  /**
   * Placeholder for Password input
   * @property
   */
  passwordPlaceholder?: string;
  /**
   * Label for the confirm password input field
   *  @property
   */
  confirmPasswordLabel?: string;
  /**
   * Placeholder for Re-enter password input
   * @property
   */
  reEnterpasswordPlaceholder?: string;
  /**
   * Errors that will be shown if any occur
   * @property
   */
  formError?: FormErrorProps;
  /**
   * Label for the submit button
   * @property
   */
  buttonLabel?: string;
  /**
   * Determines if the form is for signup
   *  @property
   */
  isSignup?: boolean;
  /**
   * Function to handle form submission
   * @property
   */
  onSubmit: (data: FieldValues) => void;
  /**
   * Callback function triggered on form cancellation
   * @property
   */
  onCancel?: () => void;

  analyticsProps?: FormAnalyticsProps | null;
  isUserprofile?: boolean;
  loading?: boolean;
}

/**
 * PasswordVerificationForm component
 *
 * @group Molecules
 * @category Component
 *
 * @param {PasswordVerificationFormProps} props - The PasswordVerificationForm props
 * @returns {ReactElement} - PasswordVerificationForm Component
 */
export const PasswordVerificationForm = ({
  currentPasswordLabel = '',
  currentPasswordPlaceholder = '',
  passwordLabel,
  confirmPasswordLabel,
  passwordPlaceholder,
  reEnterpasswordPlaceholder,
  buttonLabel = '',
  formError,
  isSignup = false,
  onSubmit,
  onCancel,
  analyticsProps,
  isUserprofile = false,
  loading = false,
}: PasswordVerificationFormProps): ReactElement => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    setError,
    control,
    trigger,
    getFieldState,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: 'onBlur',
  });
  const { fieldState: rePassField } = useController({
    name: 'reEnterpassword',
    control,
  });
  const [status, setStatus] = useState<number | undefined>(undefined);
  const [password, setPassword] = useState('');
  const [reEnteredPassword, setreEnteredPassword] = useState('');
  const [iconStatementData, setIconStatementData] = useState<
    { iconName: string; heading: string; gap: string }[] | []
  >([]);
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isCaseValid, setIsCaseValid] = useState(false);
  const [isSymbolValid, setIsSymbolValid] = useState(false);
  const [isReEnteredValid, setIsReEnteredValid] = useState(false);
  const [isFormStarted, setIsFormStarted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const { push } = AnalyticsHandler();

  let buttonObj: Array<ButtonProps> = [
    {
      text: buttonLabel,
      disabled: !isFormValid || loading,
      loading: loading,
      type: 'submit',
      size: 'lg',
      className: isUserprofile ? styles.userProfile : '',
      mode: isUserprofile ? 'tertiary' : 'primary',
    },
  ];
  const handleCancel = () => {
    if (analyticsProps && analyticsProps.form) {
      push('formabandon', 'form abandon', { ...getFormData('form abandon') });
    }
    if (onCancel) onCancel();
  };
  if (isSignup) {
    buttonObj.unshift({
      icon: 'icon-chevron-left',
      mode: 'outline',
      size: 'lg',
      type: 'button',
      disabled: loading,
      onClick: handleCancel,
    });
  } else {
    buttonObj.unshift({
      text: 'Cancel',
      mode: 'secondary',
      type: 'reset',
      size: 'lg',
      disabled: loading,
      className: isUserprofile ? styles.userProfile : '',
      onClick: handleCancel,
    });
  }
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

  const key = useId();
  useEffect(() => {
    const validationRules = [
      { isValid: isLengthValid, heading: 'Minimum of 8 characters', gap: '0' },
      {
        isValid: isCaseValid,
        heading: 'A mix of upper and lowercase',
        gap: '0',
      },
      { isValid: isSymbolValid, heading: 'A number or a symbol', gap: '0' },
    ];

    setIconStatementData(
      validationRules.map(({ isValid, heading, gap }) => ({
        iconName: isValid ? 'icon-highlight-on' : 'icon-highlight-off',
        heading,
        gap,
      }))
    );
  }, [
    password,
    reEnteredPassword,
    isLengthValid,
    isCaseValid,
    isSymbolValid,
    isReEnteredValid,
  ]);

  const checkEquality = (newPassword: string, reEnteredPassword: string) => {
    const equal =
      newPassword != '' &&
      reEnteredPassword != '' &&
      newPassword == reEnteredPassword;
    setIsReEnteredValid(equal);
  };

  const handlePasswordChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = target.value;

    setPassword(newPassword);
    setIsLengthValid(newPassword.length >= 8);
    setIsCaseValid(/^(?=.*[a-z])(?=.*[A-Z])/.test(newPassword));
    setIsSymbolValid(/[\d\W]/.test(newPassword));
    checkEquality(newPassword, reEnteredPassword);
  };

  const checkReEnterPassword = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const reEntered = target.value;
    setreEnteredPassword(reEntered);
    checkEquality(password, reEntered);
  };

  const resetCheck = () => {
    setIsLengthValid(false);
    setIsCaseValid(false);
    setIsSymbolValid(false);
    setIsReEnteredValid(false);
    setPassword('');
    setreEnteredPassword('');
  };

  //Analytics Tracker Block
  const getFormData = (status: string) => ({
    form: {
      name: analyticsProps?.form,
      status,
      type: analyticsProps?.type,
    },
    page: { page_url: window.location.href },
  });
  const triggerFormStartEvent = () => {
    if (!isFormStarted) {
      push('formstart', 'form initiation', { ...getFormData('form start') });
      setIsFormStarted(true);
    }
  };
  const triggerValidationAnalytics = async (
    e: React.FocusEvent<HTMLInputElement>
  ) => {
    const field = e.target.name;
    const isValid = await trigger(field);
    if (field === 'reEnterpassword') await trigger('password');
    const { error } = getFieldState(field);
    let checkEqual = rePassField.isTouched ? isReEnteredValid : true;

    if ((!isValid && error?.message) || !checkEqual) {
      let error_fields = analyticsProps?.[field] ?? field;
      let message = error?.message;
      setIsFormValid(false);
      if (!checkEqual) {
        error_fields = analyticsProps?.['password'] ?? 'password';
        message = 'Password must meet minimum requirements.';
        setError('password', { type: 'manual', message });
      }
      if (analyticsProps) {
        push('formerror', 'form submit failure', {
          error: {
            error_fields,
            message,
          },
          ...getFormData('form error'),
        });
      }
    } else {
      setIsFormValid(true);
    }
  };
  return (
    <form
      onReset={resetCheck}
      onSubmit={handleSubmit(onSubmit)}
      className={classNames(styles.passwordVerificationForm)}
    >
      {isUserprofile && (
        <Input
          className={styles.currectPasswordInput}
          label={currentPasswordLabel}
          name="currentPassword"
          placeholder={currentPasswordPlaceholder}
          control={control}
          rules={{
            required: 'Current password is required',
          }}
          register={register}
          setValue={setValue}
          error={errors}
          status={status}
          type="password"
        />
      )}
      <Box className={styles.PasswordVerifyBox}>
        <Input
          label={passwordLabel}
          name="password"
          placeholder={passwordPlaceholder}
          control={control}
          rules={{
            pattern: {
              message: 'Password must meet minimum requirements.',
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9!@#$%^&*()_+={}[\]|\\:;,.<>?/~`-]).{8,}$/,
            },
            required: 'Password is required',
          }}
          register={register}
          setValue={setValue}
          error={errors}
          status={status}
          type="password"
          onChange={handlePasswordChange}
          onBlur={triggerValidationAnalytics}
          onFocus={
            analyticsProps && !isFormStarted ? triggerFormStartEvent : undefined
          }
        />
        <Input
          label={confirmPasswordLabel}
          name="reEnterpassword"
          placeholder={reEnterpasswordPlaceholder}
          control={control}
          rules={{
            required: 'Re-enter password is required',
          }}
          register={register}
          error={errors}
          type="password"
          setValue={setValue}
          onChange={checkReEnterPassword}
          onBlur={triggerValidationAnalytics}
          onFocus={
            analyticsProps && !isFormStarted ? triggerFormStartEvent : undefined
          }
        />
        <Box>
          {iconStatementData?.map((props, index) => (
            <IconStatement
              className={classNames(styles.passwordIconStatement)}
              iconSize="16"
              key={key + '-' + index}
              iconStyle={{ height: '16px' }}
              // eslint-disable-next-line react/prop-types
              iconName={props.iconName}
              // eslint-disable-next-line react/prop-types
              heading={props.heading}
            />
          ))}
          <div style={{ margin: '16px 0' }}>
            <IconStatement
              className={classNames(styles.passwordIconStatement)}
              iconStyle={{ height: '16px' }}
              iconSize="16"
              iconName={
                isReEnteredValid ? 'icon-highlight-on' : 'icon-highlight-off'
              }
              heading="New password re-entered correctly?"
            />
          </div>
        </Box>
      </Box>
      <ButtonGroup
        className={classNames(styles.passwordButtonGroup)}
        data={buttonObj}
      />
    </form>
  );
};

export default PasswordVerificationForm;
