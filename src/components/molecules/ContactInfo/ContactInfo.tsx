import React, { ReactElement, useEffect, useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import Button from '@radix-styles/atoms/Button';
import Input from '@components/atoms/Input';
import { FormErrorProps, payloadProps } from '@internal/types/common';
import ButtonGroup from '@radix-styles/molecules/ButtonGroup';
import { ButtonProps } from '@radix-styles/atoms/Button';
import Heading from '@radix-styles/atoms/Heading';
import Text from '@radix-styles/atoms/Text';
import Box from '@radix-styles/atoms/Box';
import SmallCard from '../Cards/SmallCard';
import styles from './ContactInfo.module.scss';
import { AnalyticsHandler } from '@utils/Analytics';

/**
 * @interface
 * The Contact Form props type of {@link ContactInfo}.
 */

export interface ContactInfoProps {
  /**
   * Title of the Form
   * @property
   */
  title: string;
  /**
   * An optional field that is used to show the info to the user
   * @property
   */
  description: string;
  /**
   * Placeholder for Email input for the login screen
   * @property
   */
  primaryPhonePlaceholder?: string;
  /**
   * Placeholder for Password input for the login screen
   * @property
   */
  alternatePhonePlaceholder?: string;
  /**
   * Pass button text label, if need to display.
   * @property
   */
  text: string;
  /**
   * Pass button text label, if need to display.
   * @property
   */
  textSave: string;
  /**
   * Pass button text label, if need to display.
   * @property
   */
  textCancel: string;
  /**
   * Function to handle form submission
   * @property
   */
  onSubmit: (data: FieldValues) => void;
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
   * Handling the form data in an object.
   * @property
   */
  formData?: { primaryPhone: string; alternatePhone: string };
  /**
   * Status of the form submission.
   * @property
   */
  formSubmitStatus?: boolean;
}

export const ContactInfo = ({
  title,
  description,
  text,
  textSave,
  textCancel,
  onSubmit,
  formError,
  loading = false,
  primaryPhonePlaceholder = '',
  alternatePhonePlaceholder = '',
  formData = { primaryPhone: '', alternatePhone: '' },
  formSubmitStatus = false,
}: ContactInfoProps): ReactElement => {
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
  const [editable, setEditable] = useState<boolean | undefined>(false);

  const [prevPrimaryPhone, setPrevPrimaryPhone] = useState<string | undefined>(
    formData.primaryPhone
  );
  const [prevAlternatePhone, setPrevAlternatePhone] = useState<
    string | undefined
  >(formData.alternatePhone);

  const { trackClick } = AnalyticsHandler();

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

  useEffect(() => {
    setPrevPrimaryPhone(formData.primaryPhone);
    setPrevAlternatePhone(formData.alternatePhone);
    convertToFormatedPhoneNumber('primaryPhone', formData.primaryPhone);
    convertToFormatedPhoneNumber('alternatePhone', formData.alternatePhone);
  }, [formData]);

  useEffect(() => {
    if (formSubmitStatus) {
      setEditable(false);
    }
  }, [formSubmitStatus]);

  const convertToFormatedPhoneNumber = (fieldName: string, number: string) => {
    let formatted = '';
    if (number) {
      const value = number.replace(/\D/g, '');
      if (value.length > 0) {
        formatted += '(' + value.substring(0, 3);
      }
      if (value.length > 3) {
        formatted += ') ' + value.substring(3, 6);
      }
      if (value.length > 6) {
        formatted += '-' + value.substring(6, 10);
      }
    }
    return setValue(fieldName as string, formatted.trim() as string);
  };

  let buttonObj: Array<ButtonProps> = [
    {
      text: textCancel,
      type: 'reset',
      size: 'md',
      mode: 'secondary',
      disabled: loading,
      className: styles.btnGroup,
      onClick: () => {
        setEditable(false);
        convertToFormatedPhoneNumber(
          'primaryPhone',
          prevPrimaryPhone as string
        );
        convertToFormatedPhoneNumber(
          'alternatePhone',
          prevAlternatePhone as string
        );
        reset(getValues());
        trackClick({
          target: '',
          location: 'Contact',
          name: 'Contact-Cancel',
          type: 'button',
          contentTypeOrPosition: '',
        });
      },
    },
    {
      text: textSave,
      type: 'submit',
      size: 'md',
      mode: 'tertiary',
      disabled: loading,
      loading: loading,
      className: styles.btnGroup,
    },
  ];

  const formSubmit = (data: payloadProps) => {
    setPrevPrimaryPhone(String(data.primaryPhone));
    setPrevAlternatePhone(String(data.alternatePhone));
    if (onSubmit) {
      onSubmit(data);
    }
  };

  const handleEdit = () => {
    setEditable(true);
    trackClick({
      target: '',
      location: 'Contact',
      name: 'Contact-Edit',
      type: 'button',
      contentTypeOrPosition: '',
    });
  };

  return (
    <SmallCard size="3" mode="inverse">
      <form onSubmit={handleSubmit(formSubmit)} className={styles.form}>
        <Heading className={styles.headingSection}>{title}</Heading>
        <Box className={styles.formLayout}>
          <Box className={styles.formSection}>
            <Text className={styles.subHeadingSection} align="left">
              {description}
            </Text>
            <Input
              label="Primary Phone"
              name="primaryPhone"
              className={styles.input}
              disabled={!editable}
              placeholder={primaryPhonePlaceholder}
              rules={{
                required: 'Primary Phone No. is required',
                minLength: {
                  value: 14,
                  message:
                    'Enter a valid phone number with the area code, no special characters.',
                },
              }}
              register={register}
              error={errors}
              status={status}
              type="text"
              onChange={e =>
                convertToFormatedPhoneNumber('primaryPhone', e.target.value)
              }
              readOnly={!editable}
            />
            <Input
              label="Alternate Phone (Optional)"
              name="alternatePhone"
              className={styles.input}
              placeholder={alternatePhonePlaceholder}
              rules={{
                minLength: {
                  value: 14,
                  message:
                    'Enter a valid phone number with the area code, no special characters.',
                },
              }}
              register={register}
              error={errors}
              status={status}
              disabled={!editable}
              type="text"
              onChange={e =>
                convertToFormatedPhoneNumber('alternatePhone', e.target.value)
              }
              readOnly={!editable}
            />
          </Box>
        </Box>
        {editable ? (
          <ButtonGroup className={styles.nextBtnContainer} data={buttonObj} />
        ) : (
          <Button
            type="button"
            text={text}
            className={styles.editBtn}
            mode="secondary"
            onClick={handleEdit}
            iconLeft={true}
            icon="icon-edit"
          />
        )}
      </form>
    </SmallCard>
  );
};

export default ContactInfo;
