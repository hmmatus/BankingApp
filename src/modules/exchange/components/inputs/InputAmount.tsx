import InputWrapper, { InputWrapperI } from '@/components/elements/form/input/InputWrapper';
import { horizontalScale } from '@/helpers/metrics';
import { colors } from '@/styles/color';
import { typography } from '@/styles/typography';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, TextInputProps } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

interface InputAmountProps extends Partial<InputWrapperI> {
  inputProps: TextInputProps;
  onPressRightButton(): void;
  buttonLabel: string;
}

const CustomButton = ({ onPress, label }: { onPress(): void; label: string }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
      <Entypo name="select-arrows" size={20} color={colors.neutral.main} />
    </TouchableOpacity>
  );
};
const InputAmount = ({
  label,
  error,
  containerStyle,
  inputProps,
  onPressRightButton,
  buttonLabel,
}: InputAmountProps) => {
  return (
    <InputWrapper label={label} error={error} containerStyle={containerStyle}>
      <View style={styles.inputContainer}>
        <TextInput style={[styles.input, inputProps.style]} {...inputProps} />
        <CustomButton onPress={onPressRightButton} label={buttonLabel} />
      </View>
    </InputWrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderLeftColor: colors.neutral.light,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(10),
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.neutral.light,
  },
  input: {
    flex: 4,
    fontFamily: 'Poppins',
    ...typography.body1,
  },
  buttonLabel: {
    ...typography.body1,
  },
});
export default InputAmount;
