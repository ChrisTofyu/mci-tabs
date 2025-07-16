import React, { useState } from 'react';
import styles from './Donation.module.scss';
import Input from '../../atoms/Input';
import Button from '../../../radix/atoms/Button';
import Text, { TextProps as CustomTextProps } from '../../../radix/atoms/Text';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { classNames } from '@utils/common/classNames';

export interface DonationProps {
  /**
   * Title configuration for the donation block.
   * Defaults to: { text: 'Choose your donation' }
   */
  titleConfig?: Partial<CustomTextProps> & { text: string };

  /**
   * Donation frequency options (e.g., ["Monthly", "One-time"]).
   * Required.
   */
  frequencies: string[];

  /**
   * Preset donation amount options (e.g., [10, 50, 100]).
   * Required.
   */
  amounts: number[];

  /**
   * Optional default value for the custom amount input.
   * Defaults to: 0
   */
  defaultCustomAmount?: number;

  /**
   * Callback invoked when the donate button is clicked.
   * Returns selected amount and frequency.
   */
  onDonate: (amount: number, frequency: string) => void;

  /**
   * Props to configure the Donate button (text, size, effects, etc.)
   */
  buttonProps?: {
    text: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    mode?: 'primary' | 'secondary';
    effects?: 'none' | 'special';
    icon?: string;
    iconLeft?: boolean;
  };

  /**
   * Size of the entire component layout.
   * "sm-md" (default) for compact layouts, "lg-xl" for spacious ones.
   */
  size?: 'sm-md' | 'lg-xl';
}

export const Donation: React.FC<DonationProps> = ({
  titleConfig = { text: 'Choose your donation' },
  frequencies,
  amounts,
  defaultCustomAmount = 0,
  onDonate,
  buttonProps,
  size = 'sm-md',
}) => {
  // Set default selected frequency and amount from the first options
  const [selectedFrequency, setSelectedFrequency] = useState(frequencies[0]);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(
    amounts[0]
  );

  // Populate custom amount field if defaultCustomAmount > 0
  const [customAmount, setCustomAmount] = useState<string>(
    defaultCustomAmount > 0 ? defaultCustomAmount.toString() : ''
  );

  const handleDonate = () => {
    const amount = selectedAmount ?? (parseFloat(customAmount) || 0);
    if (amount > 0) onDonate(amount, selectedFrequency);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);

    const numericValue = parseFloat(value);
    // If input matches a preset amount, highlight the corresponding toggle
    if (!isNaN(numericValue) && amounts.includes(numericValue)) {
      setSelectedAmount(numericValue);
    } else {
      setSelectedAmount(null); // custom value
    }
  };

  return (
    <div className={classNames(styles['donation-component'], styles[size])}>
      <div className={styles['content-container']}>
        {/* Title */}
        <div className={styles['title-container']}>
          <Text
            as="p"
            {...titleConfig}
            className={classNames(styles.title, titleConfig?.className)}
          >
            {titleConfig.text}
          </Text>
        </div>

        {/* Frequency and amount selection */}
        <div className={styles['form-container']}>
          {/* Frequency toggle */}
          <ToggleGroup.Root
            type="single"
            value={selectedFrequency}
            onValueChange={val => val && setSelectedFrequency(val)}
            className={styles['frequency-group']}
          >
            {frequencies.map(freq => (
              <ToggleGroup.Item
                key={freq}
                value={freq}
                className={styles['toggle-item']}
              >
                {freq}
              </ToggleGroup.Item>
            ))}
          </ToggleGroup.Root>

          {/* Amount toggle */}
          <ToggleGroup.Root
            type="single"
            value={selectedAmount?.toString() || ''}
            onValueChange={val => {
              if (val) {
                const numericVal = Number(val);
                setSelectedAmount(numericVal);
                setCustomAmount(val);
              }
            }}
            className={styles['amount-group']}
          >
            {amounts.map(amt => (
              <ToggleGroup.Item
                key={amt}
                value={amt.toString()}
                className={styles['toggle-item']}
              >
                ${amt}
              </ToggleGroup.Item>
            ))}
          </ToggleGroup.Root>

          {/* Custom amount input */}
          <Input
            name="customAmount"
            type="number"
            min="0"
            step="1"
            placeholder="Custom amount"
            value={customAmount === '' ? undefined : customAmount}
            onChange={handleCustomAmountChange}
            className={styles['custom-input']}
          />
        </div>

        {/* CTA Button */}
        <div className={styles['button-container']}>
          <Button
            className={classNames(styles['donate-button'], styles[size])}
            onClick={handleDonate}
            {...{
              size: 'none',
              mode: 'primary',
              effects: 'special',
              ...buttonProps,
            }}
          >
            <span>{buttonProps?.text || 'Donate Now'}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
