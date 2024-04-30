import { horizontalScale, verticalScale } from '@/helpers/metrics';
import { colors } from '@/styles/color';
import { getFontSize } from '@/utils/getFontSize';
import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
  title: {
    fontSize: getFontSize(28),
    fontWeight: 'bold',
    color: colors.primary.main,
  },
  subtitle: {
    fontSize: getFontSize(16),
    color: colors.neutral.main,
    fontWeight: '500',
  },
  imageContainer: {
    width: '100%',
    height: verticalScale(175),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(16),
  },
});
