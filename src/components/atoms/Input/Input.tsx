import React, { ReactElement, useEffect, useState } from 'react';
import {
  Control,
  FieldError,
  FieldErrors,
  RegisterOptions,
  useController,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import TextCaption from '@components/atoms/TextCaption';
import { classNames } from '@utils/common/classNames';
import { payloadProps } from '@internal/types/common';

import styles from './Input.module.scss';

/**
 * @interface
 *
 * The InputProps type of {@link Input}.
 */
export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /**
   * Label for the input field
   * @property
   */
  label?: string;
  /**
   * Name of the input field
   * @property
   */
  name: string;
  /**
   * Value of the input field
   * @property
   */
  value?: string;
  /**
   * Function to handle the change event of the input field
   * @property
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Placeholder for the input field
   * @property
   */
  placeholder?: string;
  /**
   * Type of the input field (text, number, email, password)
   * @property
   */
  type?: 'text' | 'number' | 'email' | 'password';
  /**
   * Required field or not
   * @defaultValue `false`
   * @property
   */
  required?: boolean;
  /**
   * ReadOnly field or not
   * @defaultValue `false`
   * @property
   */
  readOnly?: boolean;
  /**
   * Disabled field or not
   * @defaultValue `false`
   * @property
   */
  disabled?: boolean;
  /**
   * Classname for the input field
   * @property
   */
  className?: string;
  /**
   * Error message for the input field
   * @property
   */
  errorMessage?: string;
  /**
   * Register function from react-hook-form
   * @property
   */
  register?: UseFormRegister<payloadProps>;
  /**
   * Rules for the input field
   * @defaultValue `{}`
   * @property
   */
  rules?: RegisterOptions;
  /**
   * Error of the input field based on the rules to display
   * @property
   */
  error?: { [key: string]: FieldError } | FieldErrors;
  /**
   * Status of the HTTP request
   *  @property {number} status - The HTTP status code or application-defined status (e.g., 404, 500).
   */
  status?: number;
  /**
   * Control from react-hook-form (optional)
   * @property
   */
  control?: Control<payloadProps>;
  /**
   * showSuccessIcon field or not
   * @defaultValue `false`
   * @property
   */
  showSuccessIcon?: boolean;
  /**
   * Function to update the input keys in the useForm hook
   * @property
   */
  setValue?: UseFormSetValue<payloadProps>;
}

/**
 * Input component to display input fields
 *
 * @group Atoms
 * @category Component
 *
 * @param {InputProps} props - The Input props
 * @returns {ReactElement} - Input Component
 */
export const Input = ({
  label,
  name,
  register,
  onChange,
  rules,
  error = {},
  status,
  type = 'text',
  placeholder = '',
  className = '',
  control,
  showSuccessIcon = false,
  setValue,
  ...props
}: InputProps): ReactElement => {
  const [inputType, setInputType] = useState(type);
  const [mode, setMode] = useState<'success' | 'error'>('error');
  const {
    fieldState: { invalid = true, isTouched = false },
  } = control ? useController({ name, control, rules }) : { fieldState: {} };

  useEffect(() => {
    setMode(status && status >= 200 && status < 300 ? 'success' : 'error');
  }, [error]);

  const handleTogglePassword = () => {
    setInputType(inputType === 'text' ? 'password' : 'text');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(name, e.target.value, { shouldDirty: true, shouldTouch: true });
    }
    onChange?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && setValue) {
      const inputElement = e.target as HTMLInputElement;
      setValue(name, inputElement.value, { shouldValidate: true });
    }
  };

  const checkPassword = type === 'password' ? styles.showPassword : '';
  const checkError = (error[name] as FieldError)?.message
    ? styles.hasError
    : '';

  const checkSuccess = isTouched && !invalid ? styles.isValid : '';
  const classes = classNames(
    styles.formInput,
    className,
    checkPassword,
    checkError,
    checkSuccess
  );

  return (
    <div className={classes}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        type={inputType}
        placeholder={placeholder}
        {...(name && register
          ? register(name, {
              ...rules,
              onChange: handleChange,
            })
          : {})}
        {...props}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {(showSuccessIcon || type === 'password') && (
        <div
          className={
            isTouched && !invalid
              ? styles.showSuccessIcon
              : type === 'password'
                ? styles.togglePassword
                : ''
          }
          onClick={type === 'password' ? handleTogglePassword : () => {}}
        ></div>
      )}
      {error[name] && (
        <TextCaption
          messages={(error[name] as FieldError)?.message}
          mode={mode}
        />
      )}
    </div>
  );
};

export default Input;
