import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/styles/color';
import { Button, useTheme } from 'react-native-paper';
import { getFontSize } from '@/utils/getFontSize';
import { OnBoardingNavProps } from '@/navigators/AuthStack';

const OnboardingScreen = ({ navigation }: OnBoardingNavProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary.main} />
      <View>
        <Button
          mode="contained"
          textColor={colors.white}
          style={[styles.buttonBordered, { borderColor: colors.white, marginBottom: 16 }]}
          onPress={() => navigation.navigate('Login')}
        >
          Sign In
        </Button>
        <Button
          mode="outlined"
          buttonColor={colors.white}
          style={[styles.buttonBordered, { borderColor: colors.white }]}
          labelStyle={styles.buttonText}
          onPress={() => navigation.navigate('SignUp')}
        >
          Sign Up
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary.main,
    paddingHorizontal: 8,
    paddingBottom: 16,
    justifyContent: 'flex-end',
  },
  buttonBordered: {
    borderWidth: 1,
  },
  buttonText: {
    fontSize: getFontSize(16),
    fontWeight: '500',
  },
});

export default OnboardingScreen;
