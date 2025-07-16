import { useEffect, useState } from 'react';

export enum DeviceTypeEnum {
  mobile = 520,
  tablet = 768,
  desktop = 1280,
}

export type DeviceType = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

/**
 * Custom hook to determine the device type based on window width.
 * It sets the state for mobile, tablet, and desktop based on the defined breakpoints.
 *
 * @returns {DeviceType} - An object containing boolean values of isMobile, isTablet, and isDesktop.
 *
 */
export const useFindDeviceType = (): DeviceType => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const handleResize = () => {
    const width = window.innerWidth;
    setIsMobile(width <= DeviceTypeEnum.mobile);
    setIsTablet(
      width > DeviceTypeEnum.mobile && width < DeviceTypeEnum.desktop
    );
    setIsDesktop(width >= DeviceTypeEnum.desktop);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile, isTablet, isDesktop };
};

export default useFindDeviceType;
