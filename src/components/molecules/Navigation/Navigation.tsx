import React, { useEffect, useState } from 'react';
import Image from '@components/atoms/Image';
import { classNames, getModuleClasses } from '@utils/common/classNames';
import FalbackImage from '@assets/images/FallbackImage.svg';
import WVLogoDesktop from '@assets/icons/logo/LogoDark.svg';
import WVLogoMobile from '@assets/icons/logo/LogoLightSmall.svg';

import styles from './Navigation.module.scss';

export interface NavigationProps {
  /**
   * Optional className for the header component.
   */
  className?: string;
  /**
   * Optional, header logo alt text.
   * @default 'logo'
   */
  logoAltText?: string;
  /**
   * Optional onClick handler for the logo.
   * @returns void
   */
  onLogoClick?: () => void;
}

export const Navigation = ({
  className,
  logoAltText = 'logo',
  onLogoClick,
}: NavigationProps) => {
  const classes = getModuleClasses(className?.trim(), styles);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 520);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={classNames(styles.headerWrapper, classes)}>
      <div>
        <Image
          onClick={onLogoClick}
          src={isMobile ? WVLogoMobile : WVLogoDesktop}
          alt={logoAltText}
          fallbackSrc={FalbackImage}
          className={classNames(
            styles.logo,
            onLogoClick ? styles.clickable : ''
          )}
        />
      </div>
    </div>
  );
};

export default Navigation;
