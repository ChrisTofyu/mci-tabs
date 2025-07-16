import type Styles from '*.module.scss';

/**
 * @param names - The names of the classes to be used
 * @returns all class names as a single string value.
 */
export const classNames = (
  ...names: Array<number | string | object | null | undefined>
) => (names?.length ? [...names].filter(Boolean).join(' ').trim() : '');

/**
 *
 * @param className - The class name to be used
 * @param styles - The module styles to be used
 * @returns all class names as a single string.
 */
export const getModuleClasses = (
  className: string | undefined,
  styles: typeof Styles
): string | undefined =>
  className
    ? className
        .trim()
        .split(' ')
        .map(name => {
          if (typeof name === 'string' && styles) {
            const key = name.trim();
            return styles[key] ?? key;
          }
          return '';
        })
        .filter(Boolean)
        .join(' ') || undefined
    : undefined;
