import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNav from './Tabs';
import BranchMapScreen from '@/modules/branch/screens/BranchMapScreen';
import InterestRateScreen from '@/modules/interestRate/screens/InterestRateScreen';
import ExchangeRateScreen from '@/modules/exchangeRate/screens/ExchangeRateScreen';
import ExchangeStack from './ExchangeStack';

type MainStackParamList = {
  Tabs: undefined;
  BranchMap: undefined;
  InterestRate: undefined;
  ExchangeRate: undefined;
  Exchange: undefined;
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
      <Stack.Screen
        name="InterestRate"
        options={{ headerTitle: 'Interest rate', headerShadowVisible: false }}
        component={InterestRateScreen}
      />
      <Stack.Screen
        name={'ExchangeRate'}
        component={ExchangeRateScreen}
        options={{ headerTitle: 'Exchange rate', headerShadowVisible: false }}
      />
      <Stack.Screen name={'Exchange'} component={ExchangeStack} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
