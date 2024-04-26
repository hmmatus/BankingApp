import SimpleOverlappedLayout from '@/components/layous/SimpleOverlappedLayout';
import { colors } from '@/styles/color';
import { getFontSize } from '@/utils/getFontSize';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoginScreen = () => {
  return (
    <SimpleOverlappedLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Hello there, sign in to continue</Text>
      </View>
    </SimpleOverlappedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: getFontSize(28),
    fontWeight: 'bold',
    color: colors.primary.main,
  },
  subtitle: {
    fontSize: getFontSize(16),
    color: colors.neutral.main,
    fontWeight: '500',
  },
});

export default LoginScreen;
