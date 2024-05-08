import HomeScreen from '@/screens/main/tabs/HomeScreen';
import SearchScreen from '@/screens/main/tabs/SearchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomHeader from './config/headers/CustomHeader';
import { verticalScale } from '@/helpers/metrics';
import TabBar from '@/components/elements/icons/TabBar';
type TabParamList = {
  Home: undefined;
  Search: undefined;
  Message: undefined;
  Settings: undefined;
};
const Tabs = createBottomTabNavigator<TabParamList>();

export default function TabsNav() {
  return (
    <Tabs.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <CustomHeader />,
        }}
      />
      <Tabs.Screen name="Search" component={SearchScreen} />
      <Tabs.Screen name="Message" component={SearchScreen} />
      <Tabs.Screen name="Settings" component={SearchScreen} />
    </Tabs.Navigator>
  );
}
