import { Text, View, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const DeviceType = (height / width) > 1.6 ? 'Phone' : 'Tablet';

export const xSmall = 15;
export const xxSmall = 13;
export const small = 17;
export const medium = 20;
export const mLarge = 25;
export const large = 30;
export const xLarge = 40;
export const xxLarge = 50;
export const largeBtn = 80;


