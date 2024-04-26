import { PixelRatio } from 'react-native';

const fontScale = PixelRatio.getFontScale();
export const getFontSize = (fontSize: number) => fontSize / fontScale;
