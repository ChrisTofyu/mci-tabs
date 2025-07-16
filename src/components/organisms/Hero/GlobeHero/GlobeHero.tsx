import React, { ReactElement } from 'react';
import Flex from '@radix-styles/atoms/Flex';
import Text from '@radix-styles/atoms/Text';
import Box from '@radix-styles/atoms/Box';
import Image from '@components/atoms/Image';
import ProgressBar from '@radix-styles/atoms/ProgressBar';
import { classNames } from '@utils/common/classNames';
import FallbackImage from '@assets/images/FallbackImage.svg';

import styles from './GlobeHero.module.scss';

/**
 * @interface
 * The GlobeHero props type of {@link GlobeHero}.
 */
export interface GlobeHeroProps {
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
   * Value of the progress bar (percentage-based, 0-100).
   * @property
   */
  progressValue: number;

  /**
   * Image URL for the hero section.
   * If unavailable, a fallback image will be used.
   * @property
   */
  globeHeroImage: string;

  /**
   * Label for the goal section.
   * @property
   */
  goalLabel: string;

  /**
   * Numeric value representing the goal.
   * @property
   */
  goalValue: string;

  /**
   * Label displayed above the progress bar.
   * @property
   */
  progressLabel: string;

  /**
   * Number of lives impacted.
   * @property
   */
  lives: string;
  /**
   * An optional parameter to modify the existing card styles
   * @property
   */
  className?: string;
}

/**
 * GlobeHero component
 *
 * @group Organism
 * @category Component
 *
 * @param {GlobeHeroProps} props - The GlobeHero props
 * @returns {ReactElement} - GlobeHero Component
 */
export const GlobeHero = ({
  title,
  subTitle,
  description,
  progressValue,
  globeHeroImage,
  goalLabel,
  goalValue,
  progressLabel,
  lives,
  className,
}: GlobeHeroProps): ReactElement => {
  return (
    <Box className={classNames(styles.globeHeroBox, className)}>
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
          src={globeHeroImage}
          alt="Globe Hero Image"
          fallbackSrc={FallbackImage}
          className={styles.globeImage}
        />
        <Box className={styles.body_card}>
          <Flex display="flex" direction="column">
            <Text className={styles.body_card_label}>{goalLabel}</Text>
            <Text className={styles.body_card_value}>{goalValue} </Text>
          </Flex>

          <Box className={styles.progressBarBox}>
            <Flex display="flex" direction="row" justify="between" className="">
              <Text>{progressLabel}</Text>
              <Text>{lives}</Text>
            </Flex>
            <ProgressBar
              size="3"
              value={progressValue}
              variant="surface"
              className={styles.progressBar}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default GlobeHero;
