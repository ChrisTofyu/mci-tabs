import React, { useEffect, useId, useState } from 'react';
import Image from '@components/atoms/Image';
import { classNames, getModuleClasses } from '@utils/common/classNames';
import FalbackImage from '@assets/images/FallbackImage.svg';
import WVLogoDesktop from '@assets/icons/logo/LogoDark.svg';
import ButtonGroup from '@radix-styles/molecules/ButtonGroup';
import { Icon } from '@components/atoms/Icons';
import { ButtonProps } from '@radix-styles/atoms/Button';
import Link from '@radix-styles/atoms/Link';

import styles from './NavigationHeader.module.scss';

type NavigationItem = {
  /**
   * Name of the nav link.
   * @property
   */
  name: string;
  /**
   * Fragment Id for the nav.
   * @property
   */
  fragmentId: string;
  /**
   * Link for the nav.
   * @property
   */
  path: string;
  /**
   * Nav navigable.
   * @property
   */
  navigable: boolean;
  /**
   * Child menu fro the nav.
   * @property
   */
  children: NavigationItem[];
};

export type NavigationData = {
  navigation: NavigationItem[];
};

export interface NavigationHeaderProps {
  /**
   * Optional class name for the header component.
   * @property
   */
  className?: string;
  /**
   * Optional, header logo alt text.
   * @property
   * @default 'logo'
   */
  logoAltText?: string;
  /**
   * Navigation links
   * @property
   */
  navLinks?: NavigationData;
  /**
   * List of buttons to display in the group
   * @property
   */
  buttonData?: Array<ButtonProps>;
  /**
   * Optional on click handler for the logo.
   * @property
   * @returns void
   */
  onLogoClick?: () => void;
  /**
   * Optional on click handler for the Nav Links.
   * @property
   * @returns void
   */
  onNavLinkClick?: (
    path: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => void;
  /**
   * Get the active path to highlight menu item
   * @property
   */
  activePath?: string;
}

export const Tabs = ({
  navLinks,
  menuOpen,
  keyPrefix = '',
  onLinkClick,
  fullWidth = false,
  isCentered = false,
  activePath,
}: {
  navLinks?: NavigationData;
  menuOpen?: boolean;
  keyPrefix?: string;
  onLinkClick: (
    path: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => void;
  fullWidth?: boolean;
  isCentered?: boolean;
  activePath?: string;
}) => {
  const [activeIndex, setActiveIndex] = useState<unknown>(null);
  const onNavClick = (
    path: string,
    event: React.MouseEvent<HTMLAnchorElement>,
    index: number | null
  ) => {
    event.preventDefault();
    setActiveIndex(index);
    onLinkClick(path, event);
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && navLinks?.navigation && activePath) {
      const currentIndex = navLinks.navigation.findIndex(value =>
        activePath.includes(value.path)
      );
      setActiveIndex(currentIndex > 0 ? currentIndex : 0);
    }
  }, [activePath]);

  return (
    <nav
      className={classNames(
        styles.navLinksSection,
        menuOpen ? styles.navLinksSlideIn : '',
        fullWidth ? styles.fullWidth : '',
        isCentered ? styles.tabCentered : ''
      )}
    >
      <ul role="menu" aria-label="Main menu">
        {navLinks?.navigation?.map((value, index) => (
          <li
            key={`${keyPrefix}-${index}`}
            className={classNames(
              activeIndex === index ? styles.activeNavLink : ''
            )}
            role="menuitem"
          >
            <Link
              href={value.path}
              onClick={event => onNavClick(value.path, event, index)}
            >
              {value.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const NavigationHeader = ({
  className,
  logoAltText = 'logo',
  navLinks,
  buttonData = [],
  onLogoClick,
  onNavLinkClick,
  activePath = '',
}: NavigationHeaderProps) => {
  const classes = getModuleClasses(className?.trim(), styles);
  const key = useId();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [menuOpen]);

  const onLinkClick = (
    path: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    onNavLinkClick?.(path, event);
    setMenuOpen(false);
  };

  return (
    <div className={classNames(styles.headerWrapper, classes)}>
      <div className={classNames(styles.headerInner)}>
        <div className={classNames(styles.hamburgerMenu)}>
          <Icon
            className={classNames(styles.hamburgerMenuIcon)}
            name={menuOpen ? 'icon-close' : 'icon-menu'}
            size="24"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

        <Tabs
          navLinks={navLinks}
          menuOpen={menuOpen}
          keyPrefix={key}
          onLinkClick={onLinkClick}
          activePath={activePath}
        />

        <div className={classNames(styles.logoSection)}>
          <Image
            onClick={onLogoClick}
            src={WVLogoDesktop}
            alt={logoAltText}
            fallbackSrc={FalbackImage}
            className={classNames(
              styles.logo,
              onLogoClick ? styles.clickable : ''
            )}
          />
        </div>

        {buttonData.length > 0 ? (
          <div
            className={classNames(
              styles.navCtaSection,
              menuOpen ? styles.navLinksSlideIn : ''
            )}
          >
            <div className={classNames(styles.navCtaSectionInner)}>
              <ButtonGroup data={buttonData} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavigationHeader;
