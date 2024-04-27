import { colors } from '@/styles/color';
import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';
const InputText = (props: TextInputProps) => {
  return (
    <TextInput
      {...props}
      mode="outlined"
      theme={{ roundness: 16, colors: { primary: colors.primary.main }, ...props.theme }}
      outlineColor={props.outlineColor ?? colors.neutral.light}
    />
  );
};

export default InputText;
