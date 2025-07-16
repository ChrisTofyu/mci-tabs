import React, { ReactElement, useEffect, useState } from 'react';
import Box from '@radix-styles/atoms/Box';
import Button from '@radix-styles/atoms/Button';
import Heading from '@radix-styles/atoms/Heading';
import PasswordVerificationForm from '../PasswordVerificationForm';
import SmallCard from '../Cards/SmallCard';
import { PasswordVerificationFormProps } from '../PasswordVerificationForm/PasswordVerificationForm';

import styles from './ChangePassword.module.scss';
import { AnalyticsHandler } from '@utils/Analytics';

/**
 * @interface
 * The Form props type of {@link ChangePassword}.
 */
export interface ChangePasswordProps extends PasswordVerificationFormProps {
  /**
   * Form status prop to check the status of form after submitted
   *  @property
   * */
  formSubmitStatus?: boolean;
  /**
   * Lable for form title
   *  @property
   * */
  title: string;
}

/**
 * ChangePassword component
 *
 * @group Molecules
 * @category Component
 *
 * @param {ChangePasswordProps} props - The ChangePassword props
 * @returns {ReactElement} - ChangePassword Component
 */
export const ChangePassword = ({
  title,
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
  formSubmitStatus = false,
  loading = false,
}: ChangePasswordProps): ReactElement => {
  const [isEdit, setIsEdit] = useState(false);
  const { trackClick } = AnalyticsHandler();

  useEffect(() => {
    setIsEdit(formSubmitStatus);
  }, [formSubmitStatus]);

  const handleCancel = () => {
    setIsEdit(false);
    if (onCancel) onCancel();
  };
  const handleEdit = () => {
    setIsEdit(true);
    trackClick({
      target: '',
      location: 'Password',
      name: 'Password-Edit',
      type: 'button',
      contentTypeOrPosition: '',
    });
  };
  return (
    <SmallCard size="3" mode="inverse">
      <Box className={styles.formLayout}>
        <Heading className={styles.headingSection}>{title}</Heading>
        {isEdit ? (
          <PasswordVerificationForm
            currentPasswordLabel={currentPasswordLabel}
            currentPasswordPlaceholder={currentPasswordPlaceholder}
            isUserprofile={isUserprofile}
            passwordLabel={passwordLabel}
            passwordPlaceholder={passwordPlaceholder}
            confirmPasswordLabel={confirmPasswordLabel}
            reEnterpasswordPlaceholder={reEnterpasswordPlaceholder}
            buttonLabel={buttonLabel}
            onSubmit={onSubmit}
            onCancel={handleCancel}
            analyticsProps={analyticsProps}
            formError={formError}
            isSignup={isSignup}
            loading={loading}
          />
        ) : (
          <Button
            className={styles.passwordButton}
            text="Edit"
            mode="secondary"
            type="button"
            disabled={false}
            onClick={handleEdit}
            iconLeft={true}
            icon="icon-edit"
            size="lg"
          />
        )}
      </Box>
    </SmallCard>
  );
};

export default ChangePassword;
