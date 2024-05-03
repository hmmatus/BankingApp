import { Control, Controller, ControllerProps, FieldValues, Path } from 'react-hook-form';
import { View, ViewProps } from 'react-native';
import InputText from './InputText';
import { TextInputProps } from 'react-native-paper';
import InputWrapper from './InputWrapper';

interface ControllerInputTextI<T extends FieldValues> {
  inputProps?: TextInputProps;
  name: Path<T>;
  label: string;
  error?: string;
  control: Control<T>;
  containerStyle?: ViewProps['style'];
}

const ControllerInputText = <T extends FieldValues>({
  control,
  inputProps,
  name,
  label,
  error,
  containerStyle,
}: ControllerInputTextI<T>) => {
  return (
    <Controller
      control={control}
      rules={{ required: true }}
      name={name}
      render={({ field: { onChange, onBlur, value, disabled } }) => (
        <InputWrapper label={label} error={error} containerStyle={containerStyle}>
          <InputText
            {...inputProps}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            disabled={disabled}
          />
        </InputWrapper>
      )}
    />
  );
};

export default ControllerInputText;
