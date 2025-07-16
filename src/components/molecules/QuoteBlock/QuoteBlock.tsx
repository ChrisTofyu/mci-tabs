import React from 'react';
import Text from '@radix-styles/atoms/Text';
import { classNames, getModuleClasses } from '@utils/common/classNames';
import Box from '@radix-styles/atoms/Box';

import { getStylesAsCssProperties } from '@utils/common/styles';
import { TextSize } from '@internal/types/common/style';
import styles from './QuoteBlock.module.scss';

export interface QuoteBlockProps {
  /**
   * Quote text for the Quote Block
   * @property
   */
  quoteText: string;
  /**
   * Quote text color for the Quote Block
   * @property
   */
  quoteTextColor?: string | undefined;
  /**
   * Quote text size for the Quote Block
   * @property
   */
  quoteTextSize?: TextSize;
  /**
   * Border Color for the Quote Block
   * @property
   */
  borderColor?: string | undefined;
  /**
   * Class name for Quote Block container
   * @property
   */
  className?: string;
}

/**
 * @group Molecules
 * @category Component
 *
 * Quote Block component is used to display a Quote Block in Article pages
 * @param {QuoteBlockProps} props
 * @returns {ReactElement}
 */

export const QuoteBlock = ({
  quoteText,
  quoteTextColor = '#000',
  quoteTextSize = '4',
  borderColor = '#E86100',
  className,
}: QuoteBlockProps) => {
  const classes = getModuleClasses(className?.trim(), styles);
  return (
    <Box
      className={classNames(styles.quoteBlockContainer, classes)}
      style={getStylesAsCssProperties({
        '--borderColor': borderColor,
        '--textColor': quoteTextColor,
      })}
    >
      <Text size={quoteTextSize}>{quoteText}</Text>
    </Box>
  );
};

export default QuoteBlock;
