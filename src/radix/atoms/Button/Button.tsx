import React, { forwardRef, ReactElement } from 'react';
import { Button as RadixButton } from '@radix-ui/themes';
import { getButtonClasses } from '@utils/elements/button';

import styles from './Button.module.scss';
import { Icon } from '@components/atoms/Icons';

/**
 * @interface
 * The Button props type of {@link Button}.
 */
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * What kind of button is this representing on UI, Primary mode?
   * @defaultValue `primary`
   * @property
   */
  mode?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'inverse'
    | 'outline'
    | 'transparent'
    | 'brand';
  /**
   * How large should the button be?
   * @defaultValue `xl`
   * @property
   */
  size?: '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'none';
  /**
   * Pass button text label, if need to display.
   * @property
   */
  text?: string;
  /**
   * Pass icon valid icon URL or FilePath to display.
   * @property
   */
  icon?: string;
  /**
   * Align the icon to the left if it is true, or else align it to the right side.
   * **Requires `icon` must be available.**
   * @defaultValue `true`
   * @property
   */
  iconLeft?: boolean;
  /**
   * Pass the color, if required a different background color for the button.
   * @property
   */
  backgroundColor?: string;
  /**
   * Pass the color, if required a different color for the button text label.
   * @property
   */
  color?: string;
  /**
   * Pass the effects to apply on the button.
   * @property
   */
  effects?: 'special' | 'slider' | 'none';
  /**
   * Pass the custom class name to apply on the button.
   * @property
   */
  className?: string;
  /**
   * Pass the aria label name to button component
   * @property
   */
  ariaLabelName?: string;
  /**
   * Does the Button shape need to be rounded or not?
   * @property
   */
  rounded?: boolean;
  /**
   * The Button will be disabled and loading if it's true
   * @property
   */
  loading?: boolean;
  /**
   * The Button will be disabled if it's true
   * @property
   */
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 *
 * @group Atoms
 * @category Radix Component
 *
 * @param {ButtonProps} props - The Button props
 * @returns {ReactElement} - Button Component
 *
 * @example
 * ```
 * <Button text="Click Me" onClick={() => alert('Clicked!')} />
 *
 * <Button icon="icon-arrow" onClick={() => alert('Clicked!')} />
 *
 * <Button text="Click Me" icon="icon-arrow" onClick={() => alert('Clicked!')} />
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      mode = 'primary',
      size = 'xl',
      text,
      icon,
      iconLeft = true,
      color,
      backgroundColor,
      effects = 'none',
      className,
      ariaLabelName,
      rounded,
      ...props
    }: ButtonProps,
    ref
  ): ReactElement => {
    const { buttonClasses, contentClasses } = getButtonClasses(
      {
        text,
        icon,
        mode,
        size,
        effects,
        iconLeft,
        className,
        rounded,
      },
      styles
    );
    const ariaLabel = (ariaLabelName ?? text ?? icon) as string;

    return (
      <RadixButton
        ref={ref}
        className={buttonClasses}
        aria-label={ariaLabel}
        style={{ backgroundColor, color }}
        {...props}
      >
        {icon || text ? (
          <>
            {effects === 'slider' ? (
              <div className={styles.sliderBar}></div>
            ) : null}
            <div className={contentClasses}>
              {text ? <span>{text}</span> : null}
              {icon ? <Icon name={icon} className={styles.icon} /> : null}
            </div>
          </>
        ) : null}
      </RadixButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
