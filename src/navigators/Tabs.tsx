import HomeScreen from '@/modules/tab/screens/HomeScreen';
import SearchScreen from '@/modules/tab/screens/SearchScreen';
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomHeader from './config/headers/CustomHeader';
import TabBar from '@/modules/tab/components/tabBar/TabBar';
import MessageScreen from '@/modules/tab/screens/MessageScreen';
import SettingsScreen from '@/modules/tab/screens/SettingsScreen';
type TabParamList = {
  Home: undefined;
  Search: undefined;
  Message: undefined;
  Settings: undefined;
};
export type HomeTabNavProps = BottomTabScreenProps<TabParamList, 'Home'>;
export type SearchNavProps = BottomTabScreenProps<TabParamList, 'Search'>;
export type MessageNavProps = BottomTabScreenProps<TabParamList, 'Message'>;
export type SettingsNavProps = BottomTabScreenProps<TabParamList, 'Settings'>;

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
      <Tabs.Screen name="Message" component={MessageScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  );
}
