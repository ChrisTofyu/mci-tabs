import React, { ReactElement } from 'react';
import Box from '@radix-styles/atoms/Box';
import Card from '@radix-styles/atoms/Card';
import Tag from '@radix-styles/atoms/Tag';
import Text from '@radix-styles/atoms/Text';
import { classNames } from '@utils/common/classNames';
import educationLogo from '@assets/icons/emblemLogo/Education.svg';
import foodLogo from '@assets/icons/emblemLogo/Food.svg';
import healthLogo from '@assets/icons/emblemLogo/Health.svg';
import waterLogo from '@assets/icons/emblemLogo/Water.svg';
import markLogo from '@assets/icons/emblemLogo/Mark.svg';
import childProtection from '@assets/icons/emblemLogo/Child_Protection.svg';

import style from './DataCard.module.scss';

/**
 * @interface
 * The Data Card props type of {@link DataCard}
 */
export interface DataCardProps {
  /**
   * Determines the size of the Data Card
   * @defaultValue `1`
   * @property
   */
  size?: '1' | '2' | '3';
  /**
   * Controls the visual style of the Data Card
   * @defaultValue `default`
   * @property
   */
  variant?: 'default' | 'surface';
  /**
   * Text displayed next to the Logo
   * @property
   */
  logoText: string;
  /**
   * Name of the Logo to be displayed
   * @property
   */
  logoName: string;
  /**
   * Main title or heading of the Card
   * @property
   */
  heading: string;
  /**
   * Subtitle or secondary heading of the Card
   * @property
   */
  subHeading: string;
  /**
   * A brief summary or description of the Card's content
   * @property
   */
  content: string;
  /**
   * Additional class names for customizing styles
   * @property
   */
  containerClass?: string;
}

/**
 * @interface
 * The Logo object types
 */
interface ILogoObj {
  [key: string]: string;
}

/**
 * The Data Card is a structured component that organizes related content and actions.
 * It features a heading, subheading, and content, while also supporting customizable
 * sizes, visual variants, and a logo.
 *
 * @group Molecules
 * @category Component
 *
 * @param {DataCardProps} props - The Data Card props
 * @returns {ReactElement} - Data Card Component
 *
 */
export const DataCard = ({
  heading,
  subHeading,
  content,
  logoName,
  logoText,
  size = '1',
  variant = 'default',
  containerClass = '',
}: DataCardProps): ReactElement => {
  // Temporary object to obtain the path of the emblem logo
  const logoObj: ILogoObj = {
    education: educationLogo,
    food: foodLogo,
    health: healthLogo,
    water: waterLogo,
    mark: markLogo,
    child: childProtection,
  };

  // Function to add the prefix with card size
  const getSize = (size: string): string => `size-${size}`;

  const logoPath: string = logoObj[logoName];

  const newClass = classNames(
    style.dataCardContainer,
    containerClass,
    style[getSize(size)],
    style[variant]
  );

  return (
    <Card className={newClass}>
      <Box className={style.headerContainer}>
        <Box className={style.header}>
          <Text as="p" className={style.heading}>
            {heading}
          </Text>
          <Text as="p" className={style.subHeading}>
            {subHeading}
          </Text>
        </Box>
        <Text as="p" className={style.content}>
          {content}
        </Text>
      </Box>
      <Box className={style.footer}>
        <Tag showAvatar mode="default" text={logoText} iconUrl={logoPath} />
      </Box>
    </Card>
  );
};

export default DataCard;
