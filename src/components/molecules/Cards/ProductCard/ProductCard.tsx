import React from 'react';
import FallBackImg from '@assets/images/FallbackImage.svg';
import Image from '@components/atoms/Image';
import Button, { ButtonProps } from '@radix-styles/atoms/Button';
import Text from '@radix-styles/atoms/Text';
import classNames from 'classnames';

import styles from './ProductCard.module.scss';

type ProductCardVariant = '1' | '2';

export interface ProductCardProps {
  /**
   * Layout variant of the card (1 = compact, 2 = horizontal)
   * @default '1'
   * @property
   */
  size?: ProductCardVariant;
  /**
   * URL of the product image
   * @property
   */
  imageSrc: string;
  /**
   * Alt text for the product image
   * @property
   */
  imageAlt: string;
  /**
   * Name of the product
   * @property
   */
  productName: string;
  /**
   * Price of the product
   * @property
   */
  productPrice: string;
  /**
   * Button property
   * @property
   */
  button?: Omit<ButtonProps, 'ref'> & { text?: string };
  /**
   * Class Name for additional styling
   * @default ''
   * @property
   */
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  size = '1',
  imageSrc,
  imageAlt,
  productName,
  productPrice,
  button,
  className = ''
}) => {
  const isHorizontal = size === '2';
  const buttonSize = isHorizontal ? '2xl' : 'xl';

  return (
    <div
      className={classNames(styles.cardContainer, `${isHorizontal ? styles.horizontal : ''}`, className)}
    >
      {isHorizontal ? (
        <>
          <div className={styles.content}>
            <div className={styles.namePriceSection}>
              <Text as="div" className={styles.name} size="6" weight="bold">
                {productName}
              </Text>
              <Text as="div" className={styles.price} size="5" weight="regular">
                {productPrice}
              </Text>
            </div>
            <div className={styles.cta}>
              {button && (
                <Button
                  {...button}
                  size={button.size || buttonSize}
                  mode={button.mode || 'primary'}
                  className={styles.buttonOverride}
                  style={{ width: '100%', ...button.style }}
                >
                  {button.text || 'View Product'}
                </Button>
              )}
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fallbackSrc={FallBackImg}
              width="100%"
              height="100%"
              className={styles.image}
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles.imageWrapper}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fallbackSrc={FallBackImg}
              width="100%"
              height="100%"
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.namePriceSection}>
              <Text as="div" className={styles.name} size="3" weight="semibold">
                {productName}
              </Text>
              <Text as="div" className={styles.price} size="2" weight="regular">
                {productPrice}
              </Text>
            </div>
            <div className={styles.cta}>
              {button && (
                <Button
                  {...button}
                  size={button.size || buttonSize}
                  mode={button.mode || 'primary'}
                  className={styles.buttonOverride}
                  style={{ width: '288px', ...button.style }}
                >
                  {button.text || 'View Product'}
                </Button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
