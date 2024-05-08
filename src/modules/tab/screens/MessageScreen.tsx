import { MessageNavProps } from '@/navigators/Tabs';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const MessageScreen = ({}: MessageNavProps) => {
  return (
    <View>
      <Text>Message Screen</Text>
    </View>
  );
};

export default MessageScreen;
