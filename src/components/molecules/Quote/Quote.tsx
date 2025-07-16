import React from 'react';
import Flex from '@radix-styles/atoms/Flex';
import Image from '@components/atoms/Image';
import Text from '@radix-styles/atoms/Text';
import { classNames, getModuleClasses } from '@utils/common/classNames';
import Link from '@radix-styles/atoms/Link';

import styles from './Quote.module.scss';

export interface QuoteProps {
  /**
   * Image url for the Quote
   * @property
   */
  imageUrl?: string | undefined;
  /**
   * Image alt text
   * @property
   */
  imageAltText?: string | undefined;
  /**
   * Fallback image url for the Quote
   * @property
   */
  imageFallback?: string | undefined;
  /**
   * Quote text for the Quote
   * @property
   */
  quoteText: string;
  /**
   * Signature text for the Quote
   * @property
   */
  signatureText?: string;
  /**
   * Class name for Quote container
   * @property
   */
  className?: string;
  /**
   * Source for the Quote
   * @property
   */
  sourceText?: string | undefined;
  /**
   * Source url for the Quote
   * @property
   */
  sourceUrl?: string | undefined;
}
export const Quote = ({
  imageUrl,
  imageAltText,
  imageFallback,
  quoteText,
  signatureText,
  className,
  sourceText,
  sourceUrl,
}: QuoteProps) => {
  const classes = getModuleClasses(className?.trim(), styles);
  const imagePresent = imageUrl && imageAltText && imageFallback;
  return (
    <>
      <Flex
        align="center"
        direction="column"
        wrap="wrap"
        className={classNames(
          styles.quoteContainer,
          !imagePresent ? styles.removeBackground : '',
          classes
        )}
      >
        {imagePresent && (
          <Image
            src={imageUrl}
            alt={imageAltText}
            fallbackSrc={imageFallback}
            width="240px"
            height="240px"
            className="roundFull"
          />
        )}
        <Text
          size="8"
          align="center"
          className={classNames(styles.quoteTextCls, styles.textCommonWidth)}
        >
          {quoteText}
        </Text>
        <Text
          size="4"
          align="center"
          className={classNames(
            styles.signatureTextCls,
            styles.textCommonWidth
          )}
        >
          — {signatureText}{' '}
          {sourceText ? (
            <Link
              href={sourceUrl}
              target="_blank"
              className={classNames(styles.sourceUrlCls)}
            >
              ({sourceText})
            </Link>
          ) : (
            ''
          )}
        </Text>
      </Flex>
    </>
  );
};

export default Quote;
