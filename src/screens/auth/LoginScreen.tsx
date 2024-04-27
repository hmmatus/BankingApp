import React, { useState } from 'react';
import SimpleOverlappedLayout from '@/components/layous/SimpleOverlappedLayout';
import { colors } from '@/styles/color';
import { getFontSize } from '@/utils/getFontSize';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoginImage from '@/assets/images/login-logo.svg';
import FingerprintImage from '@/assets/images/fingerprint.svg';
import { Button } from 'react-native-paper';
import { LoginNavProps } from '@/navigators/AuthStack';
import InputText from '@/components/elements/form/input/InputText';
import InputPassword from '@/components/elements/form/input/InputPassword';
import { horizontalScale, verticalScale } from '@/helpers/metrics';

const LoginScreen = ({ navigation }: LoginNavProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SimpleOverlappedLayout>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Hello there, sign in to continue</Text>
        <View style={styles.imageContainer}>
          <LoginImage width={horizontalScale(213)} height={verticalScale(175)} />
        </View>
        <View>
          <InputText
            label="User"
            placeholder="User"
            style={{ marginBottom: verticalScale(16) }}
            value={email}
            onChangeText={(val) => setEmail(val)}
          />
          <InputPassword value={password} onChangeText={(val) => setPassword(val)} />
          <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => {}}>
            <Text style={styles.forgotPasswordText}>Forgot your password ?</Text>
          </TouchableOpacity>

          <Button
            mode="contained"
            onPress={() => {}}
            style={{ borderRadius: 16, marginTop: verticalScale(16) }}
            contentStyle={{ paddingVertical: verticalScale(5) }}
            labelStyle={{ fontSize: getFontSize(16), color: colors.white }}
          >
            Sign in
          </Button>
          <View style={[styles.imageContainer, { marginVertical: verticalScale(24) }]}>
            <FingerprintImage />
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: getFontSize(12), color: colors.neutral.main }}>
              Don't have an account?{' '}
            </Text>
            <Text style={{ color: colors.primary.main, fontWeight: '700' }} onPress={() => {}}>
              Sign Up
            </Text>
          </View>
        </View>
      </ScrollView>
    </SimpleOverlappedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(16),
    paddingBottom: verticalScale(16),
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
  imageContainer: {
    width: '100%',
    maxHeight: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(16),
  },
  forgotPasswordText: {
    color: colors.neutral.third,
    marginBottom: verticalScale(16),
  },
});

export default LoginScreen;
