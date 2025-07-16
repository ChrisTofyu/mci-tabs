import React, { ReactElement } from 'react';
import VideoPlayer from '@components/atoms/VideoPlayer';
import Image from '@components/atoms/Image';
import Box from '@radix-styles/atoms/Box';
import Card from '@radix-styles/atoms/Card';
import Flex from '@radix-styles/atoms/Flex';
import Text from '@radix-styles/atoms/Text';
import { classNames } from '@utils/common/classNames';
import FallbackImage from '@assets/images/FallbackImage.svg';
import styles from './MediaCardTemplate.module.scss';
import { AspectRatioType } from '@radix-styles/atoms/AspectRatio/AspectRatio';

/**
 * @interface
 * Defines the common properties shared by all media types
 * This serves as a base interface for both video and image media
 */
interface MediaProps {
  /**
   * Defines the type of media to be displayed
   * @property
   */
  mediaType: 'image' | 'video';
  /**
   * The date associated with the media content that
   * used for displaying publication or event dates
   * @property
   */
  date?: string;
  /**
   * The title of the media content
   * @property
   */
  title: string;
  /**
   * A brief summary or description of the media content
   * @property
   */
  subHead?: string;
  /**
   * Fallback image Source for the image, this is will work if actual image is broken
   * @property
   */
  imageFallbackThumbnailSrc?: string;
  /**
   * Alternate text for the image
   * @property
   */
  imageAltText?: string;
  /**
   * An optional parameter to modify the existing card styles
   * @property
   */
  cardClassName?: string;
  /**
   * An optional paramenter to modify the existing content container styles
   * @property
   */
  contentContainerClass?: string;
  /**
   * An optional paramenter to change the image aspect ratio
   * @property
   */
  imgAspectRatio?: AspectRatioType;
  /**
   * Size variant of the component.
   * '1', '2', or '3' apply specific spacing or layout rules.
   * 'none' disables size-related styling.
   */
  size?: '1' | '2' | '3' | 'none';
  /**
   * If true, the component is rendered in article layout mode
   */
  isArticle?: boolean;
  /**
   * Click event handler for the component.
   */
  onClick?: (pageName?: string | null, id?: string) => void;
  /**
   * Unique ID of the card
   */
  id: string;
  /**
   * Unique ID to generate the slug
   */
  pageName?: string | null;
}

/**
 * @interface
 * Represents properties specific to video media
 */
export interface VideoMediaProps extends MediaProps {
  /**
   * Specifies that this media is a video
   * @property
   */
  mediaType: 'video';
  /**
   * The source URL of the video
   * This field is required for video media types
   * @property
   */
  videoSrc: string;
  /**
   * An optional thumbnail image for the video
   * Useful for displaying a preview before the video plays
   * @property
   */
  thumbnail?: string;
  /**
   * Prevents `imageSrc` from being used in video media
   * @property
   */
  imageSrc?: never;
}

/**
 * @interface
 * Represents properties specific to image media
 */
export interface ImageMediaProps extends MediaProps {
  /**
   * Specifies that this media is an image
   * @property
   */
  mediaType: 'image';
  /**
   * The source URL of the image
   * @property
   */
  imageSrc: string;
  /**
   * Prevents `videoSrc` from being used in image media
   * @property
   */
  videoSrc?: never;
  /**
   * Prevents `thumbnail` from being used in image media
   * @property
   */
  thumbnail?: never;
}

/**
 * @interface
 * A union type representing both image and video media properties
 * Ensures that only one type of media (either video or image) is used at a time
 */
export type MediaCardTemplateProps = ImageMediaProps | VideoMediaProps;

/**
 * The Template component for both Image and Video Media Cards
 *
 * @group Organisms
 * @category Component
 *
 * @param {MediaCardTemplateProps} props - The Media Card props
 * @returns {ReactElement} - Media Card component
 *
 */
export const MediaCardTemplate = ({
  date,
  title,
  subHead,
  mediaType,
  thumbnail,
  cardClassName,
  contentContainerClass,
  videoSrc,
  imageSrc,
  size,
  onClick,
  imageAltText = 'Media Card',
  imageFallbackThumbnailSrc = FallbackImage,
  imgAspectRatio = 'none',
  isArticle = false,
  id,
  pageName,
}: MediaCardTemplateProps): ReactElement => {
  const showImageMedia = mediaType === 'image';
  const articleClass = isArticle ? styles.article : '';
  const articleSize = isArticle && size ? styles[`size-${size}`] : '';

  const handleClick = (pageName?: string | null, id?: string) => {
    if (onClick) {
      onClick(pageName, id);
    }
  };

  return (
    <Card
      className={classNames(
        styles.card,
        articleClass,
        articleSize,
        cardClassName
      )}
      key={id}
      id={id}
      onClick={isArticle ? () => handleClick(pageName, id) : () => {}}
    >
      <Flex display="flex" className={styles.container}>
        <Box className={classNames(styles.mediaContainer, articleSize)}>
          {showImageMedia ? (
            <Image
              src={imageSrc}
              alt={imageAltText}
              fallbackSrc={imageFallbackThumbnailSrc}
              className={styles.imagePlaceholder}
              aspectRatio={imgAspectRatio}
            />
          ) : (
            <VideoPlayer
              size="none"
              src={videoSrc}
              thumbnail={thumbnail}
              containerClassName={styles.videoContainer}
              screenContainerClassName={styles.videoPlaceholder}
            />
          )}
        </Box>
        <Box
          className={classNames(
            styles.boxContainer,
            articleClass,
            articleSize,
            contentContainerClass
          )}
        >
          <Box className={styles.contentContainer}>
            {date && (
              <Text as="p" className={styles.date}>
                {date}
              </Text>
            )}
            <Box className={styles.contents}>
              {title && (
                <Text
                  as="p"
                  className={classNames(
                    styles.title,
                    articleClass,
                    articleSize
                  )}
                >
                  {title}
                </Text>
              )}
              {subHead && (
                <Text
                  as="p"
                  className={classNames(
                    styles.subHead,
                    articleClass,
                    articleSize
                  )}
                >
                  {subHead}
                </Text>
              )}
            </Box>
          </Box>
        </Box>
      </Flex>
    </Card>
  );
};

export default MediaCardTemplate;
