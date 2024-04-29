import { verticalScale } from '@/helpers/metrics';
import { colors } from '@/styles/color';
import { getFontSize } from '@/utils/getFontSize';
import { Button, ButtonProps } from 'react-native-paper';

const MainButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      mode={props.mode ?? 'contained'}
      style={[{ borderRadius: 16 }, props.style]}
      labelStyle={[{ fontSize: getFontSize(16), color: colors.white }, props.labelStyle]}
    />
  );
};

export default MainButton;
