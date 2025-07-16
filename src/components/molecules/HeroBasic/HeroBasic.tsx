import React, { useEffect, useState } from 'react';
import { classNames, getModuleClasses } from '@utils/common/classNames';
import Heading from '@radix-styles/atoms/Heading';
import Text from '@radix-styles/atoms/Text';
import Flex from '@radix-styles/atoms/Flex';
import Button from '@radix-styles/atoms/Button';
import Icons from '@components/atoms/Icons';

import styles from './HeroBasic.module.scss';

export interface HeroBasicProps {
  /**
   * Class name to add more styles
   * @property
   */
  className?: string;
  /**
   * Icon name for the Hero baic
   * @property
   */
  iconName?: string;
  /**
   * Title for the Hero baic
   * @property
   */
  title: string;
  /**
   * Description for the Hero baic
   * @property
   */
  description: string;
  /**
   * Button name for the Hero baic
   * @property
   */
  buttonName?: string;
  /**
   * Optional onClick handler for the CTA.
   * @returns void
   */
  onButtonClick?: () => void;
}
export const HeroBasic = ({
  className,
  iconName,
  title,
  description,
  buttonName,
  onButtonClick,
}: HeroBasicProps) => {
  const classes = getModuleClasses(className?.trim(), styles);

  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    // Check if the user is scrolling down and if the button should become sticky
    if (currentScrollY > 200 && currentScrollY > lastScrollY) {
      setIsSticky(true);
    } else if (currentScrollY < lastScrollY) {
      // If the user is scrolling up, remove the sticky position
      if (currentScrollY < 300) {
        setIsSticky(false);
      }
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <Flex
        gap="5"
        direction="column"
        wrap="wrap"
        align="center"
        justify="center"
        className={classNames(styles.heroFixedWidthContainer, classes)}
      >
        {iconName ? (
          <Icons
            name={iconName}
            iconHeight="40"
            iconWidth="40"
            backgroundColor="#E86100"
            backgroundSize="60px"
            color="#fff"
            rounded
            className={classNames(styles.heroIcon)}
          ></Icons>
        ) : (
          ''
        )}
        <Flex
          gap="4"
          direction="column"
          wrap="wrap"
          align="center"
          justify="center"
        >
          <Heading
            size={{ initial: '7', lg: '10', md: '7', sm: '7' }}
            weight="bold"
            align="center"
            className={classNames(styles.heroTitle)}
          >
            {title}
          </Heading>
          <Text
            size={{ initial: '3', lg: '4', md: '3' }}
            weight="regular"
            align="center"
            className={classNames(styles.heroDescription)}
          >
            {description}
          </Text>
        </Flex>
        {buttonName ? (
          <Flex
            wrap="wrap"
            justify="center"
            className={classNames(styles.heroFixedWidthContainerCtaSection)}
            style={{
              position: isSticky ? 'fixed' : 'initial',
            }}
          >
            <Button
              text={buttonName}
              size="lg"
              mode="primary"
              className={classNames(styles.heroCTAButton)}
              onClick={onButtonClick}
            ></Button>
          </Flex>
        ) : (
          ''
        )}
      </Flex>
    </>
  );
};

export default HeroBasic;
