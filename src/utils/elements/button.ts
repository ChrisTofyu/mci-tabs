import { ButtonProps } from '@radix-styles/atoms/Button';
import { classNames, getModuleClasses } from '@utils/common/classNames';
import { ButtonMouseEventType } from '@internal/types/common/button';
import type Styles from '*.module.scss';

/**
 * @param {string} size - The size string to be processed.
 * @returns {string} - The default size string with '2xl' replaced by 'xxl' and '3xl' replaced by 'xxxl'.
 */
export const getDefaultSize = (size: string = '') => {
  return size.replace('2xl', 'xxl').replace('3xl', 'xxxl');
};

/**
 * Generates button classes based on the provided properties and styles.
 * @param {Partial<ButtonProps>} props - The properties of the button.
 * @param {typeof Styles} styles - The styles module containing CSS classes.
 *
 * @returns {Object} - An object containing the button classes and content classes.
 */
export const getButtonClasses = (
  {
    text,
    icon,
    className,
    rounded,
    size = 'xl',
    iconLeft = true,
    mode = 'primary',
    effects = 'none',
  }: Partial<ButtonProps>,
  styles: typeof Styles
) => {
  // button styles of mode, size and effects
  const classes = getModuleClasses(className?.trim(), styles);
  const roundedClass = rounded ? styles.rounded : '';
  const sizeNoneSuffix = size === 'none' ? '-size' : '';
  const newButtonSize = size + sizeNoneSuffix;
  const defaultSize = getDefaultSize(newButtonSize);
  const buttonClasses = classNames(
    styles.wvButton,
    roundedClass,
    styles[defaultSize],
    styles[mode],
    styles[effects],
    classes
  );

  const IconStyles = iconLeft ? styles.iconLeft : styles.iconRight;
  const iconOnly = !text && icon ? styles.iconOnly : null;
  const textOnly = !icon && text ? styles.textOnly : null;
  const contentClasses = classNames(
    styles.buttonContent,
    icon ? IconStyles : null,
    iconOnly,
    textOnly
  );
  return { buttonClasses, contentClasses };
};

/**
 * Extracts the button name from a mouse event.
 * @param {ButtonMouseEventType} event - The mouse event from which to extract the button name.
 *
 * @returns {string} - The trimmed text content of the button, or an empty string if not available.
 */
export const getButtonName = (event: ButtonMouseEventType) => {
  const buttonName = event?.currentTarget?.textContent;
  return (
    buttonName && typeof buttonName === 'string' ? buttonName : ''
  ).trim();
};
