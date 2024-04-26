import { colors } from './color';
import { MD3LightTheme, configureFonts } from 'react-native-paper';
import { Platform } from 'react-native';
import { getFontSize } from '@/utils/getFontSize';

const fontConfig = {
  fontFamily: 'Poppins',
  fontSize: getFontSize(16),
  fontWeight: '400' as const,
  letterSpacing: 0.5,
  lineHeight: 22,
};

export const theme = {
  ...MD3LightTheme,
  colors: {
    primary: colors.primary.main,
    white: colors.white,
  },
  fonts: configureFonts({ config: fontConfig }),
};
