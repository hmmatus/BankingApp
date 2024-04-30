import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ChangePassword from '@/assets/images/change-password.svg';
import { getFontSize } from '@/utils/getFontSize';
import { colors } from '@/styles/color';
import MainButton from '@/components/elements/buttons/MainButton';
import { verticalScale } from '@/helpers/metrics';
import { authStyles } from './styles/authStyles';

const SuccessChangePasswordScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ChangePassword width={'100%'} height={'100%'} />
      </View>
      <Text style={styles.titleText}>Change password successfully!</Text>
      <Text style={styles.text}>
        You have successfully change password. Please use the new password when Sign in.
      </Text>
      <MainButton style={{ width: '100%', marginTop: verticalScale(24) }}>Ok</MainButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.white,
  },
  titleText: {
    color: colors.primary.main,
    fontSize: getFontSize(20),
    fontWeight: '700',
  },
  text: {
    color: colors.neutral.main,
    fontSize: getFontSize(14),
    marginTop: 20,
  },
  imageContainer: {
    width: '100%',
    height: verticalScale(216),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(16),
  },
});

export default SuccessChangePasswordScreen;