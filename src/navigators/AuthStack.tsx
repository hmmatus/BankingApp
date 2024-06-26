import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import OnboardingScreen from '@/modules/auth/screens/OnboardingScreen';
import { simpleHeaderOptions } from './config/headers/SimpleHeader';
import LoginScreen from '@/modules/auth/screens/LoginScreen';
import SignUpScreen from '@/modules/auth/screens/SignUpScreen';
import ForgotPasswordScreen from '@/modules/auth/screens/ForgotPasswordScreen';
import ChangePasswordScreen from '@/modules/auth/screens/ChangePasswordScreen';
import SuccessChangePasswordScreen from '@/modules/auth/screens/SuccessChangePassword';

// Stack Params List
type AuthStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  ChangePassword: undefined;
  SuccessChangePassword: undefined;
};

export type OnBoardingNavProps = NativeStackScreenProps<AuthStackParamList, 'Onboarding'>;
export type LoginNavProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;
export type SignUpNavProps = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;
export type ForgotPasswordNavProps = NativeStackScreenProps<AuthStackParamList, 'ForgotPassword'>;
export type ChangePasswordNavProps = NativeStackScreenProps<AuthStackParamList, 'ChangePassword'>;
export type SuccessChangePasswordNavProps = NativeStackScreenProps<
  AuthStackParamList,
  'SuccessChangePassword'
>;
const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          ...simpleHeaderOptions(),
          title: 'Sign in',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          ...simpleHeaderOptions(),
          title: 'Sign up',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          title: 'Forgot Password',
          headerShadowVisible: false,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{
          title: 'Change Password',
          headerShadowVisible: false,
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen
        name="SuccessChangePassword"
        component={SuccessChangePasswordScreen}
        options={{
          headerShadowVisible: false,
          title: '',
        }}
      />
    </Stack.Navigator>
  );
}
