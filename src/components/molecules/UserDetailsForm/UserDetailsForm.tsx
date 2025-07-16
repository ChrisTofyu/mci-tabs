import React, { ReactElement, useEffect, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import Input from '@components/atoms/Input';
import ButtonGroup from '@radix-styles/molecules/ButtonGroup';

import styles from './UserDetailsForm.module.scss';
import {
  FormAnalyticsProps,
  FormErrorProps,
  payloadProps,
} from '@internal/types/common';
import { ButtonProps } from '@radix-styles/atoms/Button';
import { AnalyticsHandler } from '@utils/Analytics';
import { useFindDeviceType } from '@utils/hooks';

/**
 * @interface
 * The Form props type of {@link UserDetailsForm}.
 */
export interface UserDetailsFormProps {
  /**
   * Placeholder for Email input for the user details screen
   * @property
   */
  emailPlaceholder?: string;
  /**
   * Placeholder for First name input for the user details screen
   * @property
   */
  firstNamePlaceholder?: string;
  /**
   * Placeholder for First name input for the user details screen
   * @property
   */
  lastNamePlaceholder?: string;
  /**
   * Button name for the user details screen
   * @property
   */
  buttonText?: string;
  /**
   * Error object containing validation errors for form fields
  @property
  */
  formError?: FormErrorProps;
  /**
   * Indicates whether the form submission is in progress
  @property
  */
  loading?: boolean;
  /**
   * Determines whether the form is used for signup
  @property
  */
  isSignup?: boolean;
  /**
   * Default values to pre-fill the form fields
  @property
  */
  defaultValues?: payloadProps;
  /**
   * Callback function triggered on form submission
    @param {FieldValues} data - The form data submitted
  */
  onSubmit: (data: FieldValues) => void;
  /**
   * Callback function triggered when the back button is clicked
  @property
  */
  onBackBtnClick?: () => void;
  /**
   * Analytics properties for tracking form interactions
   * @property
   * @default undefined
   */
  analyticsProps?: FormAnalyticsProps | null;
}

/**
 * UserDetailsForm component
 *
 * @group Molecules
 * @category Component
 *
 * @param {UserDetailsFormProps} props - The UserDetailsForm props
 * @returns {ReactElement} - UserDetailsForm Component
 */
export const UserDetailsForm = ({
  emailPlaceholder = '',
  firstNamePlaceholder = '',
  lastNamePlaceholder = '',
  buttonText,
  onSubmit,
  onBackBtnClick,
  formError,
  loading = false,
  isSignup = false,
  defaultValues = {},
  analyticsProps,
}: UserDetailsFormProps): ReactElement => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    setError,
    clearErrors,
    trigger,
    getFieldState,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: 'onBlur',
    defaultValues,
  });
  const [status, setStatus] = useState<number | undefined>(undefined);
  const [isFormStarted, setIsFormStarted] = useState(false);
  const { push } = AnalyticsHandler();
  const characterSet =
    'a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ';
  const nameRegex = new RegExp(
    `^(?!.*(.)\\1{2})[${characterSet}][${characterSet}' ,-]*[${characterSet}]$`
  );

  let buttonObj: Array<ButtonProps> = [
    {
      text: buttonText,
      size: 'lg',
      disabled: loading,
      className: styles.signUpBtn,
    },
  ];
  const bottomClass = !isSignup ? styles.bottomPadding : '';
  const { isDesktop } = useFindDeviceType();
  const backIcon = isDesktop ? 'icon-arrow-left' : 'icon-chevron-left';
  if (!isSignup) {
    buttonObj.unshift({
      icon: backIcon,
      mode: 'outline',
      size: 'lg',
      type: 'button',
      onClick: () => {
        if (onBackBtnClick) onBackBtnClick();
      },
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
  }, [formError, reset]);

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
    const { error } = getFieldState(field);
    if (analyticsProps && !isValid && error?.message) {
      push('formerror', 'form submit failure', {
        error: { error_fields: analyticsProps[field], message: error?.message },
        ...getFormData('form error'),
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={isSignup ? styles.signupForm : styles.userDetailsForm}
    >
      <Input
        label="Your email address"
        name="email"
        className={bottomClass}
        placeholder={emailPlaceholder}
        rules={{
          pattern: {
            message: 'Email format is invalid.',
            value: /^[a-zA-ZÀ-ÿ0-9._%+-]+@[a-zA-ZÀ-ÿ0-9.-]+\.[a-zA-Z]{2,}$/u,
          },
          required: 'This field is required',
        }}
        register={register}
        error={errors}
        status={status}
        type="text"
        setValue={(name, value) => {
          setValue(name as keyof FieldValues, value, { shouldValidate: true }); //  Sets value AND triggers validation
          clearErrors(name); //  Clears error when user inputs a valid value
        }}
        onFocus={
          analyticsProps && !isFormStarted ? triggerFormStartEvent : undefined
        }
        onBlur={triggerValidationAnalytics}
      />
      <Input
        label="First name"
        name="firstName"
        className={bottomClass}
        placeholder={firstNamePlaceholder}
        rules={{
          required: 'This field is required.',
          minLength: {
            message:
              'Please enter a minimum of two letters. We’d like to address you by your name',
            value: 2,
          },
          pattern: {
            value: nameRegex,
            message: 'First name does not meet field criteria',
          },
        }}
        register={register}
        setValue={(name, value) => {
          setValue(name as keyof FieldValues, value, { shouldValidate: true });
          clearErrors(name);
        }}
        error={errors}
        type="text"
        onFocus={
          analyticsProps && !isFormStarted ? triggerFormStartEvent : undefined
        }
        onBlur={triggerValidationAnalytics}
      />
      <Input
        label="Last name"
        name="lastName"
        className={styles.bottomPadding}
        placeholder={lastNamePlaceholder}
        rules={{
          required: 'This field is required.',
          minLength: {
            message: 'Please enter a minimum of two letters.',
            value: 2,
          },
          pattern: {
            value: nameRegex,
            message: 'Last name does not meet field criteria',
          },
        }}
        register={register}
        setValue={(name, value) => {
          setValue(name as keyof FieldValues, value, { shouldValidate: true });
          clearErrors(name);
        }}
        error={errors}
        type="text"
        onFocus={
          analyticsProps && !isFormStarted ? triggerFormStartEvent : undefined
        }
        onBlur={triggerValidationAnalytics}
      />
      <ButtonGroup className={styles.nextBtnContainer} data={buttonObj} />
    </form>
  );
};

export default UserDetailsForm;
