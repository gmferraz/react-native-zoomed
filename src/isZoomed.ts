import { NativeModules } from 'react-native';

const { ZoomedTeste } = NativeModules;
const { isZoomed } = ZoomedTeste.getConstants();

export function isDisplayZoomed(): boolean {
  return Boolean(isZoomed);
}
