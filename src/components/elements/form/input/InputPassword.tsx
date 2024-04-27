import { colors } from '@/styles/color';
import { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';

const InputPassword = (props: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TextInput
      {...props}
      mode="outlined"
      label="Password"
      placeholder="Password"
      right={
        <TextInput.Icon
          icon={showPassword ? 'eye-off' : 'eye'}
          onPress={() => {
            setShowPassword(!showPassword);
          }}
        />
      }
      theme={{ roundness: 16 }}
      style={{ marginBottom: 16, backgroundColor: 'transparent' }}
      outlineColor={props.outlineColor ?? colors.neutral.light}
      secureTextEntry={!showPassword}
    />
  );
};

export default InputPassword;
