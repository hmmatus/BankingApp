import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import { simpleHeaderOptions } from './config/headers/SimpleHeader';
import LoginScreen from '@/screens/auth/LoginScreen';

// Stack Params List
type AuthStackParamList = {
  Onboarding: undefined;
  Login: undefined;
};

export type OnBoardingNavProps = NativeStackScreenProps<AuthStackParamList, 'Onboarding'>;
export type LoginNavProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;

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
          title: 'Login',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
    </Stack.Navigator>
  );
}
