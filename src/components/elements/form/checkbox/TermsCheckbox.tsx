import { horizontalScale } from '@/helpers/metrics';
import { colors } from '@/styles/color';
import { getFontSize } from '@/utils/getFontSize';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Checkbox, CheckboxItemProps, CheckboxProps } from 'react-native-paper';

const TermsCheckbox = (props: CheckboxProps) => {
  return (
    <View style={styles.container}>
      <Checkbox {...props} />
      <View>
        <Text style={styles.text}>
          {`By creating an account your aggree ${'\n'} to our `}
          <Text
            style={[
              styles.text,
              { color: colors.primary.main, fontWeight: '500', paddingLeft: horizontalScale(16) },
            ]}
          >
            Term and Condtions
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
