import { MessageNavProps, SettingsNavProps } from '@/navigators/Tabs';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const SettingsScreen = ({}: SettingsNavProps) => {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;
