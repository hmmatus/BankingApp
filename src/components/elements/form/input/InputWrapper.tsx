import { verticalScale } from '@/helpers/metrics';
import { colors } from '@/styles/color';
import { getFontSize } from '@/utils/getFontSize';
import { StyleSheet, Text, View } from 'react-native';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

export interface InputWrapperI {
  label?: string;
  error?: string;
  children: JSX.Element;
  containerStyle?: ViewProps['style'];
}
const InputWrapper = ({ label, children, error, containerStyle }: InputWrapperI) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.labelText}>{label}</Text>
      {children}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  errorText: {
    color: colors.status.error,
    fontSize: getFontSize(12),
    marginTop: verticalScale(4),
  },
  labelText: {
    fontSize: getFontSize(14),
    color: colors.neutral.main,
    marginBottom: verticalScale(2),
  },
});

export default InputWrapper;
