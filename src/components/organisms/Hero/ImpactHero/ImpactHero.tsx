import React, { ReactElement } from 'react';
import Flex from '@radix-styles/atoms/Flex';
import Text from '@radix-styles/atoms/Text';
import Box from '@radix-styles/atoms/Box';
import Image from '@components/atoms/Image';
import { classNames } from '@utils/common/classNames';
import FallbackImage from '@assets/images/FallbackImage.svg';

import styles from './ImpactHero.module.scss';

/**
 * @interface
 * The ImpactHero props type of {@link ImpactHero}.
 */
export interface ImpactHeroProps {
  /**
   * Main title displayed in the hero section.
   * @property
   */
  title: string;

  /**
   * Subtitle displayed under the main title.
   * @property
   */
  subTitle: string;

  /**
   * Description text below the title and subtitle.
   * @property
   */
  description: string;

  /**
   * Image URL for the hero section.
   * If unavailable, a fallback image will be used.
   * @property
   */
  ImpactHeroImage: string;

  /**
   * An optional parameter to modify the existing card styles
   * @property
   */
  className?: string;

  /**
   * An optional parameter to display bottom title
   * @property
   */
  bottomTitle?: string;

  /**
   * An optional parameter to display bottom amount
   * @property
   */
  bottomAmount?: string;

  /**
   * An optional parameter to display bottom description
   * @property
   */
  bottomDesc?: string;
}

/**
 * ImpactHero component
 *
 * @group Organism
 * @category Component
 *
 * @param {ImpactHeroProps} props - The ImpactHero props
 * @returns {ReactElement} - ImpactHero Component
 */
export const ImpactHero = ({
  title,
  subTitle,
  description,
  ImpactHeroImage,
  className,
  bottomTitle,
  bottomAmount,
  bottomDesc,
}: ImpactHeroProps): ReactElement => {
  return (
    <Box className={classNames(styles.impactHeroBox, className)}>
      <Flex display="flex" direction="column" className={styles.header}>
        <Flex display="flex" direction="column" className={styles.headeline}>
          <Text className={classNames(styles.caption, styles.title)}>
            {title}
          </Text>
          <Text className={classNames(styles.caption, styles.subtitle)}>
            {subTitle}
          </Text>
        </Flex>
        <Text className={styles.description}> {description} </Text>
      </Flex>
      <Flex display="flex" direction="column" className={styles.body}>
        <Image
          src={ImpactHeroImage}
          alt="Impact Hero Image"
          fallbackSrc={FallbackImage}
          className={styles.peopleImage}
        />
        <Flex
          display="flex"
          direction="column"
          className={styles.bottomSection}
        >
          <Box className={styles.titleSection}>
            <Text
              as="p"
              className={classNames(styles.body_card_label, styles.bottomTitle)}
            >
              {bottomTitle}
            </Text>
            <Text
              as="p"
              className={classNames(
                styles.body_card_value,
                styles.bottomAmount
              )}
            >
              {bottomAmount}{' '}
            </Text>
          </Box>
          <Box>
            <Text
              as="p"
              className={classNames(styles.body_card_value, styles.bottomDesc)}
            >
              {bottomDesc}{' '}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ImpactHero;
