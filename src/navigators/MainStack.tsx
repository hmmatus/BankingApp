import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNav from './Tabs';
import BranchMapScreen from '@/modules/branch/screens/BranchMapScreen';

type MainStackParamList = {
  Tabs: undefined;
  BranchMap: undefined;
};
export type BranchMapScreenProps = NativeStackScreenProps<MainStackParamList, 'BranchMap'>;
const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={TabsNav} options={{ headerShown: false }} />
      <Stack.Screen
        name="BranchMap"
        options={{ headerTitle: 'Branch' }}
        component={BranchMapScreen}
      />
    </Stack.Navigator>
  );
}
