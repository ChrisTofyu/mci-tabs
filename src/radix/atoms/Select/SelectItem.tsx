import React, { ReactElement } from 'react';
import { Select } from 'radix-ui';
import Icon from '@components/atoms/Icons';
import { classNames } from '@utils/common/classNames';
import styles from './Select.module.scss';

/**
 * @interface
 * Props for an individual selectable item inside a custom Select dropdown.
 */
interface SelectItemProps {
  /**
   * Text content displayed for the item.
   */
  children: string;

  /**
   * Value associated with this select item.
   */
  value: string;

  /**
   * Custom CSS class for styling the item.
   */
  className?: string;

  /**
   * Disables selection of the item if set to true.
   */
  disabled?: boolean;
}

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  (
    { children, className, value, disabled = false, ...props }: SelectItemProps,
    ref
  ): ReactElement => {
    return (
      <Select.Item
        value={value}
        disabled={disabled}
        className={classNames(styles.customSelectItem, className)}
        {...props}
        ref={ref}
      >
        <Select.ItemIndicator className={styles.itemIndicator}>
          <Icon name="icon-check" iconWidth="16" iconHeight="16" />
        </Select.ItemIndicator>
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  }
);

SelectItem.displayName = 'SelectItem';

export default SelectItem;
