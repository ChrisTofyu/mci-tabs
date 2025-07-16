import React, { ReactNode, useEffect, useState } from 'react';
import { idRegexPattern, idRegexPatternRemoval } from '@utils/constants/common';
import { xssDomPurify } from '@utils/common/xssDomPurify';
import htmlToRadix, { Config } from '@utils/common/htmlToRadix';

// extractHtmlElements is a utility function that check and process HTML elements from the string.
const extractHtmlElements = (htmlString: string | ReactNode) => {
  let value = '';
  let id = '';
  if (typeof htmlString === 'string') {
    value = htmlString;

    const result = value.match(idRegexPattern);
    if (result) {
      id = result[0];
      id = id.replace(idRegexPatternRemoval, '');
    }

    value = value.replaceAll(idRegexPattern, '');
    value = xssDomPurify(value);
  }
  return { elements: value, id };
};

type ContentOutput = {
  newChildren: string | React.JSX.Element | React.JSX.Element[] | null;
  id?: string;
};

/**
 *
 * useContent is a custom hook that extracts HTML elements from a string or ReactNode and converts them to Radix components.
 * It also sanitizes the HTML to prevent XSS attacks.
 * extracts the id from the HTML string and removes it from the content.
 *
 * @param {string | ReactNode} data - The HTML string or ReactNode to be processed.
 * @param {Config} config - Optional configuration object for htmlToRadix.
 *
 * @returns {Object} - An object containing the new children and id.
 *
 */
export const useContent = (
  data: string | ReactNode | null,
  config?: Config
): ContentOutput => {
  const [id, setId] = useState<string>('');
  const [htmlContent, setHtmlContent] = useState<string>('');
  useEffect(() => {
    if (data) {
      const { elements, id } = extractHtmlElements(data);
      setId(id);
      setHtmlContent(elements);
    }
  }, [htmlContent]);

  const html2String = htmlToRadix(htmlContent, config);

  return { newChildren: html2String, id };
};
export default useContent;
