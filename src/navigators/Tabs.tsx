import HomeScreen from '@/screens/main/tabs/HomeScreen';
import SearchScreen from '@/screens/main/tabs/SearchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomHeader from './config/headers/CustomHeader';
import { verticalScale } from '@/helpers/metrics';

const Tabs = createBottomTabNavigator();

export default function TabsNav() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <CustomHeader />,
        }}
      />
      <Tabs.Screen name="Search" component={SearchScreen} />
    </Tabs.Navigator>
  );
}
