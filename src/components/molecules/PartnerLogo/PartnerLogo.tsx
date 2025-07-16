import React from 'react';
import FallbackImage from '@assets/images/FallbackImage.svg';
import ImageGroup from '@components/molecules/ImageGroup';

export type PartnerLogoProps = {
  /**
   * className for PartnerLogo container
   */
  className?: string;
};

export const PartnerLogo = (props: PartnerLogoProps) => {
  const partnerLogos = [
    {
      src: '',
      icon: 'icon-content-accredited-member',
      alt: 'p1',
      fallbackSrc: FallbackImage,
      height: '40px',
      width: '126px',
      link: {
        href: 'https://giveconfidently.ca/accredited-member/world-vision-canada-vision-mondiale-canada/',
        target: '_blank',
        name: 'Accredited Member - World Vision Canada',
      },
    },
    {
      src: '',
      icon: 'icon-content-bbb',
      alt: 'p2',
      fallbackSrc: FallbackImage,
      height: '40px',
      width: '102px',
      link: {
        href: 'https://www.bbb.org/',
        target: '_blank',
        name: 'Better Business Bureau',
      },
    },
    {
      src: '',
      icon: 'icon-content-imagine-canada',
      alt: 'p3',
      fallbackSrc: FallbackImage,
      height: '40px',
      width: '135px',
      link: {
        href: 'https://www.imaginecanada.ca/en',
        target: '_blank',
        name: 'Imagine Canada',
      },
    },
    {
      src: '',
      icon: 'icon-content-hc',
      alt: 'p4',
      fallbackSrc: FallbackImage,
      height: '40px',
      width: '135px',
      link: {
        href: 'https://www.worldvision.ca/humanitarian-coalition',
        target: '_blank',
        name: 'Humanitarian Coalition',
      },
    },
  ];

  return <ImageGroup className={props.className} data={partnerLogos} />;
};

export default PartnerLogo;
