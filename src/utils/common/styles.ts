import { CSSProperties } from 'react';

/**
 * @param styles - The styles object to be used
 * @returns return as object as CSSProperties
 */
export const getStylesAsCssProperties = (styles: object): CSSProperties => ({
  ...styles,
});
