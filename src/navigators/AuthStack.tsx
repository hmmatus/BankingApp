import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import { simpleHeaderOptions } from './config/headers/SimpleHeader';
import LoginScreen from '@/screens/auth/LoginScreen';
import SignUpScreen from '@/screens/auth/SignUpScreen';

// Stack Params List
type AuthStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  SignUp: undefined;
};

export type OnBoardingNavProps = NativeStackScreenProps<AuthStackParamList, 'Onboarding'>;
export type LoginNavProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;
export type SignUpNavProps = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

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
    </Stack.Navigator>
  );
}
