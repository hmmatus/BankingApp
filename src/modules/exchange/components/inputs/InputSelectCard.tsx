import { colors } from '@/styles/color';
import { StyleSheet, View } from 'react-native';
import { PickerItemProps, Picker, PickerProps } from '@react-native-picker/picker';
import React, { useCallback } from 'react';

interface Props extends PickerProps {
  items: PickerItemProps[];
  onChangeValue: (value: string) => void;
  selectedValue: string;
}

const InputSelectCard = ({ items, onChangeValue, ...props }: Props) => {
  const handleValueChange = useCallback(
    (value: string) => {
      onChangeValue(value);
    },
    [onChangeValue]
  );

  return (
    <View style={styles.picker}>
      <Picker {...props} onValueChange={handleValueChange}>
        {items.map(({ label, value }) => (
          <Picker.Item key={value} label={label} value={value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.neutral.main,
    backgroundColor: colors.white,
  },
});

export default InputSelectCard;
