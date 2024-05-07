import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNav from './Tabs';

type MainStackParamList = {
  Tabs: undefined;
};
const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={TabsNav} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
