import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNav from './Tabs';
import BranchMapScreen from '@/modules/branch/screens/BranchMapScreen';
import InterestRateScreen from '@/modules/interestRate/screens/InterestRateScreen';
import ExchangeRateScreen from '@/modules/exchangeRate/screens/ExchangeRateScreen';
import ExchangeScreen from '@/modules/exchange/screens/ExchangeScreen';

type ExchangeStackParamList = {
  Exchange: undefined;
};
export type ExchangeScreenProps = NativeStackScreenProps<ExchangeStackParamList, 'Exchange'>;
const Stack = createNativeStackNavigator<ExchangeStackParamList>();

export default function ExchangeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Exchange"
        component={ExchangeScreen}
        options={{ headerTitle: 'Exchange', headerShadowVisible: false }}
      />
    </Stack.Navigator>
  );
}
