import React, {
  Fragment,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Select as RadixSelect } from 'radix-ui';
import { FieldError, FieldErrors } from 'react-hook-form';
import TextCaption from '@components/atoms/TextCaption';
import Icon from '@components/atoms/Icons';
import { classNames } from '@utils/common/classNames';
import Divider from '../Divider';
import ScrollArea from '../ScrollArea';
import SelectItem from './SelectItem';

import styles from './Select.module.scss';

/**
 * @interface
 * The structure of an individual option in a select dropdown
 */
interface SelectOptions {
  /**
   * Display label shown in the dropdown
   * @property
   */
  label: string;

  /**
   * Value associated with the select option
   * @property
   */
  value: string;

  /**
   * Type of the select option (e.g., "item", "group")
   * @property
   */
  type: string;

  /**
   * Whether the option is disabled and not selectable
   * @property
   */
  disabled?: boolean;

  /**
   * Whether a visual separator should follow this item
   * @property
   */
  needSeparator?: boolean;
}

/**
 * @interface
 * The props for the Select component used to render dropdowns
 */
export interface SelectProps {
  /**
   * Placeholder text displayed when no option is selected
   * @property
   */
  placeholder: string;

  /**
   * The name of the form field, used in form data
   * @property
   */
  name: string;

  /**
   * Array of options available for selection
   * @property
   */
  options: SelectOptions[];

  /**
   * Whether the select field is required
   * @property
   */
  required?: boolean;

  /**
   * The visual size variant of the select component (e.g., '1' or '2')
   * @property
   */
  size?: '1' | '2';

  /**
   * Callback triggered when a selection is made
   * @property
   */
  onChange: ([key]: string) => void;

  /**
   * The currently selected value
   * @property
   */
  value: string;

  /**
   * Error object containing field validation errors
   * @property
   */
  error?: { [key: string]: FieldError } | FieldErrors;

  /**
   * Status code for handling visual feedback or validation
   * @property
   */
  status?: number;

  /**
   * Whether the select input is disabled
   * @property
   */
  disabled?: boolean;

  /**
   * Additional class names for customizing styles
   * @property
   */
  containerClass?: string;
}

export const Select = ({
  value,
  status,
  options,
  onChange,
  size = '2',
  containerClass,
  error = {},
  name = 'select',
  required = false,
  disabled = false,
  placeholder = 'Select one...',
}: SelectProps): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isOptionsOpened, setIsOptionsOpened] = useState<boolean>(false);

  const mode = status && status >= 200 && status < 300 ? 'success' : 'error';

  const handleClick = (data: boolean) => {
    setIsOptionsOpened(data);
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const span = wrapper.querySelector(
      '.customSelectTrigger > span:first-of-type'
    ) as HTMLSpanElement | null;

    if (!span) return;

    const applyMaxWidth = () => {
      const maxTextWidth = wrapper.offsetWidth - 70;
      if (maxTextWidth > 0) {
        Object.assign(span.style, {
          maxWidth: `${maxTextWidth}px`,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          display: 'inline-block',
        });
      }
    };

    const resizeObserver = new ResizeObserver(applyMaxWidth);
    resizeObserver.observe(wrapper);

    applyMaxWidth();

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const concatSize = `size-${size}`;

  return (
    <div
      className={classNames(styles.selectWrapper, concatSize, containerClass)}
      id={`${name}-container`}
      ref={wrapperRef}
    >
      <RadixSelect.Root
        name={name}
        value={value}
        disabled={disabled}
        onOpenChange={handleClick}
        onValueChange={onChange}
      >
        <RadixSelect.Trigger
          className={classNames(
            styles.customSelectTrigger,
            concatSize,
            mode === 'error' && error[name] ? mode : ''
          )}
          aria-label={name}
          aria-labelledby={`${name}-label`}
        >
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon className={styles.customSelectIcon}>
            <Icon
              name="icon-chevron-down"
              className={classNames(
                styles.arrowDown,
                concatSize,
                isOptionsOpened ? 'opened' : ''
              )}
            />
            {required && (
              <span className={classNames(styles.requiredAsterisk, concatSize)}>
                *
              </span>
            )}
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content
            className={styles.customSelectContent}
            position="popper"
            sideOffset={4}
          >
            <ScrollArea
              orientation="vertical"
              classname={styles.scrollContainer}
            >
              <RadixSelect.Viewport className={styles.customSelectViewport}>
                {options?.map(
                  ({ value, label, disabled, type, needSeparator }, idx) => {
                    if (type === 'item') {
                      return (
                        <Fragment key={`option-${idx + 1}`}>
                          <SelectItem
                            value={value}
                            disabled={disabled || false}
                            className={concatSize}
                          >
                            {label}
                          </SelectItem>
                          {needSeparator && (
                            <Divider
                              color="primary"
                              orientation="horizontal"
                              size={4}
                            />
                          )}
                        </Fragment>
                      );
                    }
                  }
                )}
              </RadixSelect.Viewport>
            </ScrollArea>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
      {error[name] && !isOptionsOpened && (
        <TextCaption
          messages={(error[name] as FieldError)?.message}
          mode={mode}
        />
      )}
    </div>
  );
};

export default Select;
