import { getFontSize } from '@/utils/getFontSize';
import { colors } from './color';

export const typography = {
  title1: {
    fontSize: getFontSize(24),
    fontWeight: '700' as '700',
    color: colors.neutral.main,
  },
  title2: {
    fontSize: getFontSize(20),
    fontWeight: '700' as '700',
    color: colors.neutral.main,
  },
  title3: {
    fontSize: getFontSize(16),
    fontWeight: '700' as '700',
    color: colors.neutral.main,
  },
  body1: {
    fontSize: getFontSize(16),
    fontWeight: '500' as '500',
    color: colors.neutral.main,
  },
  body2: {
    fontSize: getFontSize(16),
    color: colors.neutral.main,
  },
  body3: {
    fontSize: getFontSize(14),
    fontWeight: '500' as '500',
    color: colors.neutral.main,
  },
  caption1: {
    fontSize: getFontSize(14),
    fontWeight: '700' as '700',
    color: colors.neutral.main,
  },
  caption2: {
    fontSize: getFontSize(12),
    fontWeight: '500' as '500',
    color: colors.neutral.main,
  },
};
