import React, { ReactElement } from 'react';
import styles from './GiftDetail.module.scss';
import Image from '@components/atoms/Image';
import ReadMore from '@components/molecules/ReadMore';
import Button from '@radix-styles/atoms/Button';
import Text from '@radix-styles/atoms/Text';

export interface GiftDetailProps {
  /**
   * Display the Gift image, if exists
   * @property
   */
  image?: string;
  /**
   * Fallback image url for the Gift Image
   * @property
   */
  imageFallback?: string;
  /**
   * Image alt text
   * @property
   */
  imageAltText?: string;
  /**
   * Name of the Gift
   * @property
   */
  name?: string;
  /**
   * Price of the Gift
   * @property
   */
  price?: string;
  /**
   * Currency of the Gift amount
   * @property
   * @default '$'
   */
  currency?: string;
  /**
   * Details of the Gift
   * @property
   */
  details?: string;
  /**
   * Button text
   * @property
   * @default 'Buy this gift'
   */
  buttonText?: string;
  /**
   * Button onClick handler
   * @property
   */
  buttonOnClick?: () => void;
}

export const GiftDetail = ({
  image,
  imageFallback,
  imageAltText,
  name,
  price,
  currency = '$',
  details,
  buttonText = 'Buy this gift',
  buttonOnClick,
}: GiftDetailProps): ReactElement => {
  const priceDetail = `${currency}${price}`;
  return (
    <div className={styles.container}>
      <div className={styles.childDetails}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.imgStyle}
            src={image}
            alt={imageAltText}
            fallbackSrc={imageFallback}
          />
        </div>
        <div className={styles.details}>
          <div className={styles.personalDetails}>
            <div className={styles.names}>
              <Text
                size={{ initial: '7', xs: '7', sm: '7', md: '8', lg: '9' }}
                weight="semibold"
                align="center"
              >
                {name}
              </Text>
              <Text
                size={{ initial: '4' }}
                weight="semibold"
                align="center"
                className={styles.dollar}
              >
                {priceDetail}
              </Text>
            </div>
            <div className={styles.about}>
              <ReadMore
                contents={[details ?? '']}
                maxLines={3}
                contentClassName={styles.content}
                align="center"
                expandButtonLabel="Show more"
                collapseButtonLabel="Show less"
              />
            </div>
            <Button
              size="xl"
              mode="secondary"
              text={buttonText}
              className={styles.BuyGiftButton}
              onClick={buttonOnClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftDetail;
