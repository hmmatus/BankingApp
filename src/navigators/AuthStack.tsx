import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import OnboardingScreen from "../screens/auth/OnboardingScreen";


const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}