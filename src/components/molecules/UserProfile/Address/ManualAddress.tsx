import React, { ReactElement } from 'react';
import { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form';
import Input from '@components/atoms/Input';
import { payloadProps } from '@internal/types/common';
import Box from '@radix-styles/atoms/Box';
import Text from '@radix-styles/atoms/Text';
import { Skeleton } from '@radix-ui/themes';

import styles from './ManualAddress.module.scss';

/**
 * @interface
 * The Manual Address prop type of {@link ManualAddress}
 */
export interface ManualAddressProps {
  /**
   *  A short description or helper text displayed above the form
   * @property
   */
  description: string;
  /**
   *  The useForm `register` function from React Hook Form used to bind input fields
   * @property
   */
  register: UseFormRegister<payloadProps>;
  /**
   *  A boolean indicating whether the form is in a loading state
   * @property
   */
  loading: boolean;
  /**
   *  An optional object containing field validation errors
   * @property
   */
  error?: { [key: string]: FieldError } | FieldErrors;
}

/**
 * ManualAddress is a reusable form component for manually editing,
 * and submitting address information
 *
 * @group Molecules
 * @category Component
 *
 * @param {ManualAddress} props - The Manual Address props
 * @returns {ManualAddress} - Manual Address Component
 *
 */
export const ManualAddress = ({
  description,
  register,
  error,
  loading,
}: ManualAddressProps): ReactElement => {
  return (
    <Box className={styles.container}>
      <Text className={styles.description}>
        <Skeleton loading={loading}>{description}</Skeleton>
      </Text>
      <Box className={styles.commonGap}>
        <Input
          label="Unit, PO Box, RR, etc"
          name="unit"
          type="text"
          register={register}
          error={error}
          className={styles.input}
        />
        <Input
          label="Street No"
          name="streetNumber"
          type="text"
          register={register}
          error={error}
          rules={{
            required: 'This field is required',
          }}
          className={styles.input}
        />
      </Box>
      <Box className={styles.commonGap}>
        <Input
          label="Street Name"
          name="streetName"
          type="text"
          register={register}
          error={error}
          rules={{
            required: 'This field is required',
          }}
          className={styles.input}
        />
        <Input
          label="Street Type"
          name="streetType"
          type="text"
          register={register}
          error={error}
          rules={{
            required: 'This field is required',
          }}
          className={styles.input}
        />
      </Box>
      <Box>
        <Input
          label="City"
          name="city"
          type="text"
          register={register}
          error={error}
          rules={{
            required: 'This field is required',
          }}
        />
      </Box>
      <Box className={styles.commonGap}>
        <Input
          label="Province"
          name="province"
          type="text"
          register={register}
          error={error}
          rules={{
            required: 'This field is required',
          }}
          className={styles.input}
        />
        <Input
          label="Postal Code"
          name="postalCode"
          type="text"
          register={register}
          error={error}
          rules={{
            required: 'This field is required',
          }}
          className={styles.input}
        />
      </Box>
      <Box>
        <Input
          label="Country"
          name="country"
          type="text"
          register={register}
          error={error}
          rules={{
            required: 'This field is required',
          }}
        />
      </Box>
    </Box>
  );
};

export default ManualAddress;
