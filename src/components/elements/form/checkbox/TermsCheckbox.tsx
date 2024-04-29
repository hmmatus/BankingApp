import { horizontalScale } from '@/helpers/metrics';
import { colors } from '@/styles/color';
import { getFontSize } from '@/utils/getFontSize';
import React from 'react';
import { StyleSheet, Text, View, ViewProps } from 'react-native';
import { Checkbox, CheckboxItemProps, CheckboxProps } from 'react-native-paper';

interface TermsCheckboxProps extends CheckboxItemProps {
  containerStyle?: ViewProps['style'];
}
const TermsCheckbox = (props: TermsCheckboxProps) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Checkbox {...props} />
      <View>
        <Text style={styles.text}>
          {`By creating an account your aggree${'\n'} to our `}
          <Text
            style={[
              styles.text,
              { color: colors.primary.main, fontWeight: '700', paddingLeft: horizontalScale(16) },
            ]}
          >
            Term and Conditions
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    color: colors.neutral.main,
    fontSize: getFontSize(14),
  },
});

export default TermsCheckbox;
