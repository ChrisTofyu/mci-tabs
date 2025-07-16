import React, { useId } from 'react';
import Text from '@radix-styles/atoms/Text';
import Heading from '@radix-styles/atoms/Heading';
import Card from '@radix-styles/atoms/Card';
import Icon from '@components/atoms/Icons';
import Image from '@components/atoms/Image';
import FallBackImg from '@assets/images/FallbackImage.svg';
import Box from '@radix-styles/atoms/Box';
import Flex from '@radix-styles/atoms/Flex';

import { classNames } from '@utils/common/classNames';
import Truncate from '@components/atoms/Truncate';

import styles from './TextAndImage.module.scss';

interface ImageProps {
  /**
   * The source of the image
   * @default ''
   * @property
   */
  src: string;
  /**
   * The alt text of the image
   * @default 'Card Image'
   * @property
   */
  alt: string;
}

export interface TextAndImageProps {
  /**
   * The variant of the card, that will change the border style of the card
   * @default default
   * @property
   */
  variant?: 'default' | 'surface';
  /**
   * The headline of the card
   * @default ''
   * @property
   */
  headline?: string;
  /**
   * The description of the card
   * @default ''
   * @property
   */
  description?: string;
  /**
   * Image of the card
   * @default {}
   * @property
   */
  image?: ImageProps;
  /**
   * The icon Name for the card
   * @default ''
   * @property
   */
  icon?: string;
  /**
   * The size of the card supports 1 and 2,
   * based on the screen size, that will auto change the respective size of the card inbetween them
   * @default auto
   * @property
   */
  size?: 'auto' | '1' | '2';
  /**
   * onClick event for the card
   * @default undefined
   * @property
   */
  onClick?: () => void;
  /**
   * Cursor style for the card
   * @default false
   * @property
   */
  cursor?: boolean;

  /**
   * class name for the card
   * @default ''
   * @property
   */
  className?: string;
}

/**
 * Card component that will render the card with text and/or image
 *
 * The content of the card can the following combinations, "headline, description, icon", "headline and image" and "image".
 *
 * @group Molecules
 * @component
 *
 * @param {TextAndImageProps} props - The card props
 * @returns {React.ReactElement}
 *
 */
export const TextAndImage = ({
  variant,
  headline,
  description,
  icon,
  image,
  size,
  onClick,
  className,
  cursor,
}: TextAndImageProps) => {
  const id = useId();
  const cursorStyle = cursor ? styles.cursor : '';
  const showImageOnly =
    !headline && !description && !icon ? styles.showImageOnly : '';
  const showImage = image?.src ? styles.showImage : '';
  const classes = classNames(
    styles.container,
    showImageOnly,
    showImage,
    variant,
    styles['size-' + size],
    cursorStyle,
    className
  );

  return (
    <Box className={classes} onClick={onClick}>
      <Card
        className={styles.card}
        variant={variant === 'surface' ? variant : 'classic'}
        asChild
      >
        <React.Fragment key={id}>
          <Flex
            display="flex"
            direction="column"
            className={styles.cardContent}
            maxWidth="100%"
            height="100%"
          >
            {(headline || description) && (
              <Truncate className={styles.textSection}>
                <>
                  {headline && (
                    <Heading
                      align="left"
                      weight="semibold"
                      className={styles.heading}
                      size={{ initial: '2', md: '7' }}
                    >
                      {headline}
                    </Heading>
                  )}
                  {description && (
                    <Text
                      align="left"
                      as="div"
                      className={styles.description}
                      size={{ initial: '1', md: '4' }}
                    >
                      {description}
                    </Text>
                  )}
                </>
              </Truncate>
            )}
            {icon && (
              <Box className={styles.iconSection} asChild>
                <Icon name={icon} className={styles.icon} />
              </Box>
            )}
            {image && (
              <Image
                src={image.src}
                alt={image.alt ?? 'Card Image'}
                fallbackSrc={FallBackImg}
                className={styles.image}
              />
            )}
          </Flex>
        </React.Fragment>
      </Card>
    </Box>
  );
};

export default TextAndImage;
