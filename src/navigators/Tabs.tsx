import HomeScreen from '@/screens/main/tabs/HomeScreen';
import SearchScreen from '@/screens/main/tabs/SearchScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

export default function TabsNav() {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Search" component={SearchScreen} />
    </Tabs.Navigator>
  );
}
