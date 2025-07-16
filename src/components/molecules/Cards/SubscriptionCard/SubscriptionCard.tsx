import React, { ReactElement } from 'react';
import Icon from '@components/atoms/Icons';
import Image from '@components/atoms/Image';
import Box from '@radix-styles/atoms/Box';
import Card from '@radix-styles/atoms/Card';
import Heading from '@radix-styles/atoms/Heading';
import Text from '@radix-styles/atoms/Text';
import { classNames } from '@utils/common/classNames';

import childFallbackImg from '@assets/images/childFallback.svg';
import fallbackImg from '@assets/images/FallbackImage.svg';

import styles from './SubscriptionCard.module.scss';

/**
 * @interface
 * Base interface for all subscription card types. It includes shared
 * properties such as image data, textual content, and optional behavior
 */
interface CommonSubscriptionCardProps {
  /**
   * A discriminator to identify the card variant. Can be 'childSponsorship', 'addOn', or 'sponsorChild'
   * @property
   */
  cardType: 'childSponsorship' | 'addOn' | 'sponsorChild';
  /**
   * URL of the main image to display
   * @property
   */
  src: string;
  /**
   * Alternate text for the image
   * @property
   */
  alt: string;
  /**
   * Optional fallback image URL in case the main image fails to load
   * @property
   */
  fallbackImage?: string;
  /**
   * Main heading or label for the card
   * @property
   */
  title: string;
  /**
   * Supporting text for the card
   * @property
   */
  description: string;
  /**
   * Optional tab index to control keyboard navigation order
   * @property
   */
  tabIndex?: number;
  /**
   * Optional CSS class name for styling the outer container
   * @property
   */
  containerClassName?: string;
  /**
   * Optional callback function triggered when the card is clicked
   * @property
   */
  onCardClick?: () => void;
}

/**
 * @interface
 * Extends the base card with additional information for child sponsorship,
 * such as location and date of birth.
 */
interface ChildSponsorshipProps extends CommonSubscriptionCardProps {
  /**
   * Specifies that this card is a 'childSponsorship'
   * @property
   */
  cardType: 'childSponsorship';
  /**
   * Optional geographic location of the child
   * @property
   */
  location?: string;
  /**
   * Optional icon name representing the location
   * @property
   */
  locationIconName?: string;
  /**
   * Optional birth date of the child
   * @property
   */
  dateOfBirth?: string;
  /**
   * Optional icon name representing the date of birth
   * @property
   */
  dateOfBirthIconName?: string;
}

/**
 * @interface
 * Represents an add-on item card (non-child sponsorship). Inherits from the
 * base card but explicitly excludes child-related properties
 */
interface AddonCardProps extends CommonSubscriptionCardProps {
  /**
   * Specifies that this card is a 'addOn'
   * @property
   */
  cardType: 'addOn';
  /**
   * Specified as never to disallow these properties for this card type
   * @property
   */
  location?: never;
  /**
   * Specified as never to disallow these properties for this card type
   * @property
   */
  locationIconName?: never;
  /**
   * Specified as never to disallow these properties for this card type
   * @property
   */
  dateOfBirth?: never;
  /**
   * Specified as never to disallow these properties for this card type
   * @property
   */
  dateOfBirthIconName?: never;
}

/**
 * @interface
 * Specialized card for a "sponsor this child" call-to-action. It overrides
 * image and click handler behavior and excludes child detail fields.
 */
interface SponsorChildProps
  extends Omit<
    CommonSubscriptionCardProps,
    'onCardClick' | 'src' | 'fallbackImage' | 'alt'
  > {
  /**
   * Specifies that this card is a 'sponsorChild'
   * @property
   */
  cardType: 'sponsorChild';
  /**
   * Specified as never to disallow these properties for this card type
   * @property
   */
  location?: never;
  /**
   * Specified as never to disallow these properties for this card type
   * @property
   */
  locationIconName?: never;
  /**
   * Specified as never to disallow these properties for this card type
   * @property
   */
  dateOfBirth?: never;
  /**
   * Specified as never to disallow these properties for this card type
   * @property
   */
  dateOfBirthIconName?: never;
  /**
   * Optional (overrides required base props to be optional)
   * @property
   */
  src?: string;
  /**
   * Optional (overrides required base props to be optional)
   * @property
   */
  fallbackImage?: string;
  /**
   * Optional (overrides required base props to be optional)
   * @property
   */
  alt?: string;
  /**
   * Required click handler (mandatory override of optional base prop)
   * @property
   */
  onCardClick: () => void;
}

/**
 * @interface
 * A union type representing all valid subscription card configurations. This enables discriminated
 * unions based on the cardType property to enforce type safety across all card types.
 */
export type SubscriptionCardProps =
  | ChildSponsorshipProps
  | AddonCardProps
  | SponsorChildProps;

/**
 * The SubscriptionCard component is a versatile UI element designed to display
 * different types of subscription-related content cards in a consistent layout.
 * It supports multiple variants including child sponsorship, add-on products,
 * and sponsor-child call-to-actions, using a discriminated union to enforce type-safe props.
 *
 * @group Molecules
 * @category Component
 *
 * @param {SubscriptionCardProps} props - The Subscription Card props
 * @returns {ReactElement} - Subscription Card component
 *
 */
export const SubscriptionCard = ({
  src,
  alt,
  title,
  description,
  location,
  dateOfBirth,
  cardType,
  tabIndex,
  onCardClick,
  fallbackImage = fallbackImg,
  locationIconName = 'icon-location',
  dateOfBirthIconName = 'icon-gift',
  containerClassName,
}: SubscriptionCardProps): ReactElement => {
  const isChildSponsorship = cardType === 'childSponsorship';
  const isSponsorChildType = cardType === 'sponsorChild';
  const imageSource = isSponsorChildType ? childFallbackImg : src;
  const fallbackDescripText = isChildSponsorship
    ? 'Sponsored since &lt;Unknown&gt;'
    : '&lt;Details not available&gt;';
  const name = title || '&lt;Name unavailable&gt;';
  const fallbackAltText = isSponsorChildType
    ? 'Add another sponsorship'
    : 'child avatar unavailable';

  // Function to handle keyboard interactions on the card
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = e;
    const keyPressed = key === 'Enter' || key === ' ';
    if (keyPressed && onCardClick) {
      onCardClick();
    }
  };

  return (
    <Card
      className={classNames(
        styles.cardContainer,
        onCardClick ? styles.enabledClick : '',
        containerClassName
      )}
      onClick={onCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={tabIndex || 0}
    >
      <Image
        src={imageSource}
        alt={alt || fallbackAltText}
        aspectRatio="3:2"
        className={styles.imageBlock}
        fallbackSrc={fallbackImage}
      />
      <Box className={styles.profileBlock}>
        <Box className={styles.head}>
          <Heading className={styles.childName}>{name}</Heading>
          <Text className={styles.since}>
            {description || fallbackDescripText}
          </Text>
        </Box>
        {isChildSponsorship && (
          <Box className={styles.foot}>
            {location && (
              <Box className={styles.location}>
                <Icon name={locationIconName} size="16" />
                <Text className={styles.content}>{location}</Text>
              </Box>
            )}
            {dateOfBirth && (
              <Box className={styles.birthDate}>
                <Icon name={dateOfBirthIconName} size="16" />
                <Text className={styles.content}>{dateOfBirth}</Text>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default SubscriptionCard;
