import HomeScreen from '@/modules/tab/screens/HomeScreen';
import SearchScreen from '@/modules/tab/screens/SearchScreen';
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomHeader from './config/headers/CustomHeader';
import TabBar from '@/modules/tab/components/tabBar/TabBar';
type TabParamList = {
  Home: undefined;
  Search: undefined;
  Message: undefined;
  Settings: undefined;
};
export type SearchNavProps = BottomTabScreenProps<TabParamList, 'Search'>;

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
