import { Control, Controller, ControllerProps, FieldValues, Path } from 'react-hook-form';
import { TextInputProps } from 'react-native-paper';
import InputWrapper from './InputWrapper';
import InputPassword from './InputPassword';
import { ViewProps } from 'react-native';

interface ControllerInputPasswordI<T extends FieldValues> {
  inputProps?: TextInputProps;
  name: Path<T>;
  label: string;
  error?: string;
  control: Control<T>;
  containerStyle?: ViewProps['style'];
}

const ControllerInputPassword = <T extends FieldValues>({
  control,
  inputProps,
  name,
  label,
  error,
  containerStyle,
}: ControllerInputPasswordI<T>) => {
  return (
    <Controller
      control={control}
      rules={{ required: true }}
      name={name}
      render={({ field: { onChange, onBlur, value, disabled } }) => (
        <InputWrapper label={label} error={error} containerStyle={containerStyle}>
          <InputPassword
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

export default ControllerInputPassword;
