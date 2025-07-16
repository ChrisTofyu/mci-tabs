import React from 'react';
import { getStylesAsCssProperties } from '@utils/common/styles';
import Text from '@radix-styles/atoms/Text';
import { classNames, getModuleClasses } from '@utils/common/classNames';
import styles from './Footer.module.scss';
import Link from '@radix-styles/atoms/Link';
import { Flex } from '@radix-ui/themes';
import { Icon, IconProps } from '@components/atoms/Icons/Icon';
import Icons from '@components/atoms/Icons';

interface FooterLink {
  text: string;
  href?: string;
  color?: string;
}

interface ContentText {
  text: string;
}

export interface FooterProps extends React.HTMLAttributes<HTMLImageElement> {
  className?: string;
  color?: string;
  backgroundColor?: string;
  logoType?: 'light' | 'dark';
  imageColor?: string;
  Content?: ContentText[];
  contactInfo?: string;
  socialButtons?: IconProps[];
  ImgContent?: string;
  links?: FooterLink[];
  ImageIcon?: IconProps[];
}

export const Footer = ({
  backgroundColor,
  color,
  imageColor,
  logoType = 'light',
  className,
  Content = [],
  contactInfo,
  socialButtons = [],
  ImgContent,
  links = [],
  ImageIcon = [],
}: FooterProps) => {
  const classes = getModuleClasses(className?.trim(), styles);
  const currentYear = new Date().getFullYear();
  return (
    <div
      className={classNames(styles.footerWrapper, classes)}
      style={getStylesAsCssProperties({
        '--backgroundColor': backgroundColor,
        '--color': color,
        '--imageColor': imageColor,
      })}
    >
      <div className={styles.HeaderContent}>
        <Icons
          className={styles.productLogo}
          name={logoType == 'light' ? 'icon-logo-light' : 'icon-logo-dark'}
          iconHeight="41"
          iconWidth="210"
        ></Icons>
        <Text className={styles.text}>
          {`© ${currentYear} World Vision Canada. All rights reserved`}
        </Text>
        {Content.map((item, index) => (
          <Text key={'content-' + index} className={styles.text}>
            {item.text}
          </Text>
        ))}
      </div>

      <div className={styles.contactFollow}>
        <div className={styles.contact}>
          <Text className={styles.textCon}>Contact Us</Text>
          <div className={styles.PhoneNum}>
            {' '}
            <Text className={styles.PhoneNum}>{contactInfo}</Text>
          </div>
        </div>

        <div className={styles.contact}>
          <Text className={styles.textCon}>Follow Us</Text>
          <div className={styles.socialButtons}>
            {socialButtons.map((icon, index) => (
              <Icon key={index} {...icon} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.accessibility}>
        <div>
          <Flex
            direction="row"
            gap="8px"
            justify="center"
            className={styles.link}
          >
            {links.map((link, index) => (
              <Link key={index} href={link.href} className={styles.linkSize}>
                {' '}
                {link.text}
              </Link>
            ))}
          </Flex>
        </div>
        <div className={styles.ImgContent}>
          <Text size="2">{ImgContent}</Text>
        </div>
        <div className={styles.imageIconSize}>
          {ImageIcon.map((icon, index) => (
            <Icon key={index} {...icon} className={styles.imageColor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
