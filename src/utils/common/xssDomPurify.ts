import DOMPurify from 'dompurify';

/**
 *
 * Purify HTML String or DOM to prevent XSS attacks.
 * and remove unwanted attributes such as id, class, style.
 *
 * @param {string} value - The HTML string to be sanitized.
 * @param {string[]} forbidAttribute - An array of attributes to be forbidden, always the id, class, style attribute will be removed and we can configure other attributes using this. - default value is []
 * @param {DOMPurify.Config} config - configuration object - default value is { ADD_ATTR: ['target'] }
 *
 * @return Sanitized string
 *
 */
export const xssDomPurify = (
  value: string | Node,
  forbidAttribute: string[] = [],
  config: DOMPurify.Config = { ADD_ATTR: ['target'] }
) => {
  const purify = DOMPurify();
  const FORBID_ATTR = [
    'id',
    'class',
    'style',
    ...forbidAttribute,
    ...(config.FORBID_ATTR ?? []),
  ];
  return purify.sanitize(value, { ...config, FORBID_ATTR });
};
