import { useMemo } from 'react';
import { isDisplayZoomed } from 'react-native-zoomed';

export const useIsZoomed = () => {
  const isZoomed = useMemo(() => isDisplayZoomed(), []);

  return isZoomed;
};
