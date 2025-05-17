import { useEffect, useState } from 'react';

type DeviceType = 'mobile' | 'tablet' | 'desktop';

const getDeviceType = (): DeviceType => {
  const ua = navigator.userAgent;

  if (/Mobi|Android/i.test(ua)) {
    if (/Tablet|iPad/i.test(ua)) {
      return 'tablet';
    }
    return 'mobile';
  }

  return 'desktop';
};

const useDevice = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

  useEffect(() => {
    setDeviceType(getDeviceType());
  }, []);

  return {
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
    deviceType,
  };
};

export default useDevice;
