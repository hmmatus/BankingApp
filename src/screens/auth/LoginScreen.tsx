import React, { useState } from 'react';
import SimpleOverlappedLayout from '@/components/layouts/SimpleOverlappedLayout';
import { colors } from '@/styles/color';
import { getFontSize } from '@/utils/getFontSize';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoginImage from '@/assets/images/login-logo.svg';
import FingerprintImage from '@/assets/images/fingerprint.svg';
import { LoginNavProps } from '@/navigators/AuthStack';
import InputText from '@/components/elements/form/input/InputText';
import InputPassword from '@/components/elements/form/input/InputPassword';
import { horizontalScale, verticalScale } from '@/helpers/metrics';
import { authStyles } from './styles/authStyles';
import MainButton from '@/components/elements/buttons/MainButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = ({ navigation }: LoginNavProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SimpleOverlappedLayout>
      <KeyboardAwareScrollView contentContainerStyle={styles.container} extraHeight={40}>
        <Text style={authStyles.title}>Welcome Back</Text>
        <Text style={authStyles.subtitle}>Hello there, sign in to continue</Text>
        <View style={authStyles.imageContainer}>
          <LoginImage width={'100%'} height={'100%'} />
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
          <TouchableOpacity
            style={{ alignSelf: 'flex-end', marginTop: verticalScale(8) }}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.forgotPasswordText}>Forgot your password ?</Text>
          </TouchableOpacity>

          <MainButton
            onPress={() => {}}
            style={{ marginTop: verticalScale(16) }}
            contentStyle={{ paddingVertical: verticalScale(5) }}
          >
            Sign in
          </MainButton>
          <View
            style={{ marginVertical: verticalScale(24), width: '100%', height: verticalScale(64) }}
          >
            <FingerprintImage width="100%" height="100%" />
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: getFontSize(12), color: colors.neutral.main }}>
              Don't have an account?{' '}
            </Text>
            <Text
              style={{ color: colors.primary.main, fontWeight: '700' }}
              onPress={() => navigation.navigate('SignUp')}
            >
              Sign Up
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SimpleOverlappedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(16),
    paddingBottom: verticalScale(16),
  },
  forgotPasswordText: {
    color: colors.neutral.third,
    marginBottom: verticalScale(16),
  },
});

export default LoginScreen;
