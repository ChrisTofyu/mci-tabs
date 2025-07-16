import React, { ReactElement, useEffect, useState } from 'react';
import { Skeleton } from '@radix-ui/themes';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Input from '@components/atoms/Input';
import SmallCard from '@components/molecules/Cards/SmallCard';
import Box from '@radix-styles/atoms/Box';
import Button from '@radix-styles/atoms/Button';
import ButtonGroup from '@radix-styles/molecules/ButtonGroup';
import Flex from '@radix-styles/atoms/Flex';
import Link from '@radix-styles/atoms/Link';
import Text from '@radix-styles/atoms/Text';
import { classNames } from '@utils/common/classNames';
import ManualAddress from './ManualAddress';

import styles from './AddressForm.module.scss';
import { AnalyticsHandler } from '@utils/Analytics';

/**
 * @interface
 * The Address prop type of {@link address}.
 */
export interface IAddress {
  /**
   *  Optional unit number
   * @property
   */
  unit: string | null;
  /**
   * Street number of the address
   * @property
   */
  streetNumber: string | null;
  /**
   * Name of the street (e.g., "Main", "Broadway")
   * @property
   */
  streetName: string | null;
  /**
   * Type of the street (e.g., "Street", "Avenue", "Boulevard")
   * @property
   */
  streetType: string | null;
  /**
   * Directional component of the address (e.g., "N", "S", "NE")
   * @property
   */
  streetDirection: string | null;
  /**
   * City name
   * @property
   */
  city: string | null;
  /**
   * Province or state code (e.g., "ON", "CA", "TX")
   * @property
   */
  province: string | null;
  /**
   * Postal or ZIP code
   * @property
   */
  postalCode: string | null;
  /**
   * Country name or code
   * @property
   */
  country: string | null;
}

/**
 * @interface
 * The Address Form prop type of {@link AddressForm}.
 */
export interface AddressFormProps {
  /**
   * Title displayed at the top of the address form
   * @property
   */
  title: string;
  /**
   * Brief description or instructions shown to the user
   * @property
   */
  description: string;
  /**
   * Description shown specifically for manual entry mode
   * @property
   */
  manualEntryDescription: string;
  /**
   * The current or default address values used to pre-fill the form
   * @property
   */
  address: IAddress;
  /**
   * Label for the manual entry toggle button
   * @property
   */
  manualEntryText: string;
  /**
   * Label for the address auto-fill toggle button
   * @property
   */
  autoFillText: string;
  /**
   * Optional prefix text displayed above or before the form fields
   * @property
   */
  prefixText: string;
  /**
   * Callback function called when the form is submitted with valid data
   * @property
   */
  onSubmit: (data: FieldValues) => void;
  /**
   * Optional label for the left action button
   * @defaultValue `Cancel`
   * @property
   */
  leftBtnName?: string;
  /**
   * Optional label for the right action button
   * @defaultValue `Save`
   * @property
   */
  rightBtnName?: string;
  /**
   * Indicates whether the form is in a loading or submitting state
   * @defaultValue `false`
   * @property
   */
  loading?: boolean;
  /**
   * Optional class name for custom styling of the form
   * @property
   */
  className?: string;
  formSubmitStatus: boolean;
}

/**
 * AddressForm is a reusable form component for collecting,
 * editing, and submitting address information.
 *
 * @group Molecules
 * @category Component
 *
 * @param {AddressFormProps} props - The Address Form props
 * @returns {ReactElement} - Address Form Component
 *
 */
export const AddressForm = ({
  title,
  description,
  manualEntryDescription,
  manualEntryText,
  className,
  prefixText,
  autoFillText,
  address,
  leftBtnName = 'Cancel',
  rightBtnName = 'Save',
  onSubmit,
  loading = false,
  formSubmitStatus = false,
}: AddressFormProps): ReactElement => {
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [isManualType, setIsManualType] = useState<boolean>(true);
  const [contentLoading, setContentLoading] = useState<boolean>(true);
  const { trackClick } = AnalyticsHandler();

  // Manual entry form fields
  const {
    register: manualRegister,
    handleSubmit: manualSubmit,
    reset: manualReset,
    formState: { errors },
  } = useForm<FieldValues>({
    mode: 'onBlur',
    defaultValues: address,
  });

  // Auto Fill Address form fields
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (address) {
      manualReset(address);
    }
  }, [address, manualReset]);

  useEffect(() => {
    if (formSubmitStatus) {
      resetForm();
      // TODO: Need to false the `isManualType` When we enable the Auto fill option as follows
      // Ex. setIsManualType(false);
    }
  }, [formSubmitStatus]);

  const {
    unit,
    streetNumber,
    streetName,
    streetType,
    streetDirection,
    city,
    province,
    postalCode,
    country,
  } = address;

  useEffect(() => {
    setContentLoading(false);
  }, []);

  // Resetting the cached input values and edit mode
  const resetForm = () => {
    setIsEdited(false);
    reset();
    manualReset();
  };

  const handleCancelClick = () => {
    // TODO: Need to false the `isManualType` When we enable the Auto fill option as follows
    // Ex. setIsManualType(false);

    // Resetting the cached input values when canceling save
    resetForm();
    trackClick({
      target: '',
      location: 'Address',
      name: 'Address-Cancel',
      type: 'button',
      contentTypeOrPosition: '',
    });
  };

  // Submission handler for Manual entry form
  const manualFormSubmit = (addressData: FieldValues) => {
    if (onSubmit) onSubmit(addressData);
  };

  // Submission handler for Auto Fill form
  const autoFillFormSubmit: SubmitHandler<FieldValues> = (
    addressData: FieldValues
  ) => {
    if (onSubmit) onSubmit(addressData);
  };

  // Null and Undefined checker
  const nullChecker = (data: Array<string | null | undefined>) =>
    data.map(rec => (rec ? rec : ''));
  const handleEdit = () => {
    setIsEdited(true);
    trackClick({
      target: '',
      location: 'Address',
      name: 'Address-Edit',
      type: 'button',
      contentTypeOrPosition: '',
    });
  };

  return (
    <SmallCard size="3" mode="inverse">
      <Box
        style={{ gap: isEdited ? '24px' : '16px' }}
        className={classNames(styles.container, className)}
      >
        <Text as="p" className={styles.heading}>
          <Skeleton loading={contentLoading}>{title}</Skeleton>
        </Text>
        {isEdited ? (
          <form
            onSubmit={
              isManualType
                ? manualSubmit(manualFormSubmit)
                : handleSubmit(autoFillFormSubmit)
            }
          >
            <Box className={styles.commonGaps}>
              <Box className={styles.withMode}>
                {isManualType ? (
                  <ManualAddress
                    description={manualEntryDescription}
                    register={manualRegister}
                    loading={contentLoading}
                    error={errors}
                  />
                ) : (
                  <Box className={styles.autoFill}>
                    <Text className={styles.description}>
                      <Skeleton loading={contentLoading}>
                        {description}
                      </Skeleton>
                    </Text>
                    <Input
                      type="text"
                      register={register}
                      name="addressLookup"
                      label="Address lookup"
                      placeholder="Unit/ House number/ Street Name/ City/ Province/ Postal code/Country"
                    />
                  </Box>
                )}
                {/* Added the `!isManualType` here to hide the Input Type switch in Address form 
                  We need to remove that when we enable the Auto Fill option
                */}
                {!isManualType && (
                  <Box className={styles.switchMode}>
                    {prefixText && <Text>{prefixText}&nbsp;</Text>}
                    {(isManualType ? autoFillText : manualEntryText) && (
                      <Link
                        onClick={() => setIsManualType(prevVal => !prevVal)}
                      >
                        {isManualType ? autoFillText : manualEntryText}
                      </Link>
                    )}
                  </Box>
                )}
              </Box>
              <ButtonGroup
                data={[
                  {
                    size: 'lg',
                    mode: 'secondary',
                    text: leftBtnName,
                    type: 'button',
                    className: styles.btnGroup,
                    onClick: handleCancelClick,
                  },
                  {
                    size: 'lg',
                    text: rightBtnName,
                    type: 'submit',
                    mode: 'tertiary',
                    className: styles.btnGroup,
                    loading: loading,
                  },
                ]}
                disabled={loading}
                direction="horizontal"
              />
            </Box>
          </form>
        ) : (
          <Box className={styles.addressContainer}>
            <Flex display="flex" direction="column">
              <Box className={styles.addressPreview}>
                <Flex display="flex" direction="column">
                  <Skeleton height="72px" loading={loading}>
                    <Text as="p" className={styles.address}>
                      <Skeleton loading={contentLoading}>
                        {nullChecker([
                          `${unit ? unit + '-' : ''}${streetNumber || ''}`,
                          streetName,
                          streetType,
                          streetDirection,
                        ]).join(' ')}
                      </Skeleton>
                    </Text>
                    <Text as="p" className={styles.address}>
                      <Skeleton loading={contentLoading}>
                        {nullChecker([city, province, postalCode]).join(' ')}
                      </Skeleton>
                    </Text>
                    <Text as="p" className={styles.address}>
                      <Skeleton loading={contentLoading}>{country}</Skeleton>
                    </Text>
                  </Skeleton>
                </Flex>
              </Box>
              <Button
                iconLeft
                icon="icon-edit"
                mode="secondary"
                size="lg"
                text="Edit"
                className={styles.editBtn}
                onClick={handleEdit}
              />
            </Flex>
          </Box>
        )}
      </Box>
    </SmallCard>
  );
};

export default AddressForm;
