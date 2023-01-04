import { NativeModules, Platform } from 'react-native';

const { ZoomedTeste } = NativeModules;
const IS_IOS = Platform.OS === 'ios';

let isZoomed = false;

if (IS_IOS) {
  const constants = ZoomedTeste.getConstants();
  isZoomed = Boolean(constants.isZoomed);
}

export function isDisplayZoomed(): boolean {
  return isZoomed;
}
