import { horizontalScale } from '@/helpers/metrics';
import { colors } from '@/styles/color';
import { getFontSize } from '@/utils/getFontSize';
import React from 'react';
import { StyleSheet, Text, View, ViewProps } from 'react-native';
import { Checkbox, CheckboxItemProps, CheckboxProps } from 'react-native-paper';

interface CustomCheckboxProps extends CheckboxItemProps {
  containerStyle?: ViewProps['style'];
  message: string;
}
const CustomCheckbox = (props: CustomCheckboxProps) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Checkbox {...props} />
      <View>
        <Text style={styles.text}>{props.message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.neutral.main,
    fontSize: getFontSize(14),
  },
});

export default CustomCheckbox;
