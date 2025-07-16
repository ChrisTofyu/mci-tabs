import React from 'react';
import { classNames, getModuleClasses } from '@utils/common/classNames';
import Flex from '@radix-styles/atoms/Flex';
import Text from '@radix-styles/atoms/Text';
import { Heading } from '@radix-styles/atoms/Heading';
import Image from '@components/atoms/Image';

import styles from './ArticlesHero.module.scss';
import { formatDate } from '@utils/common/date';

export interface ArticlesHeroProps {
  /**
   * Image position for the Articles
   * @property
   * @default 'top'
   */
  imagePosition?: 'top' | 'right' | 'left';
  /**
   * Image url for the Articles
   * @property
   */
  imageUrl?: string;
  /**
   * Image alt text
   * @property
   */
  imageAltText?: string;
  /**
   * Fallback image url for the Articles
   * @property
   */
  imageFallback?: string;
  /**
   * Title for the Articles
   * @property
   */
  articleTitle?: string;
  /**
   * Description for the Articles
   * @property
   */
  articleDescription?: string;
  /**
   * Author name for the Articles
   * @property
   */
  authorName?: string;
  /**
   * Authored date for the Articles
   * @property
   */
  authoredDate?: string;
  /**
   * Class name for Articles container
   * @property
   */
  className?: string;
}
export const ArticlesHero = ({
  imagePosition = 'top',
  imageUrl,
  imageAltText,
  imageFallback,
  articleTitle,
  articleDescription,
  authorName,
  authoredDate,
  className,
}: ArticlesHeroProps) => {
  const isTop = imagePosition == 'top';
  const row = imagePosition == 'left' ? 'row' : 'row-reverse';
  const direction = isTop ? 'column' : row;
  const classes = getModuleClasses(className?.trim(), styles);
  const containerWidth = isTop
    ? classNames(styles.articlesContainerWidth)
    : classNames(styles.articlesFullWidth);

  const formattedDate = formatDate(authoredDate);

  return (
    <div className={classNames(styles.articlesWrapper, classes)}>
      <div className={containerWidth}>
        <Flex
          align="center"
          direction={direction}
          wrap="wrap"
          className={classNames(styles.articlesBannerSection)}
        >
          <Flex
            className={classNames(styles.articlesBannerSectionImageWrapper)}
          >
            <Image
              minWidth="100%"
              maxWidth="100%"
              src={imageUrl ?? ''}
              alt={imageAltText ?? ''}
              fallbackSrc={imageFallback}
              className={classNames(styles.articlesImage)}
            />
          </Flex>
          <Flex
            align="center"
            direction="column"
            wrap="wrap"
            className={classNames(styles.articlesContentSection)}
          >
            {articleTitle && (
              <Heading
                size="9"
                weight="semibold"
                align="center"
                className={classNames(styles.articlesTitle)}
              >
                {articleTitle}
              </Heading>
            )}
            {articleDescription && (
              <Text
                size="4"
                align="center"
                className={classNames(styles.articlesDescription)}
              >
                {articleDescription}
              </Text>
            )}
            {authorName && (
              <Text
                size="1"
                align="center"
                className={classNames(styles.articlesAuthorName)}
              >
                Written by <b>{authorName}</b>
              </Text>
            )}
            {formattedDate && (
              <Text
                size="1"
                align="center"
                className={classNames(styles.articlesAuthorName)}
              >
                on <b>{formattedDate}</b>
              </Text>
            )}
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default ArticlesHero;
