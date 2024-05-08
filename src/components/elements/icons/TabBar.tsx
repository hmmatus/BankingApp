import { colors } from '@/styles/color';
import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Text } from 'react-native-paper';
import Home from '@/assets/icons/tab/home.svg';
import Settings from '@/assets/icons/tab/settings.svg';
import Messages from '@/assets/icons/tab/message.svg';
import Search from '@/assets/icons/tab/search.svg';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { horizontalScale, verticalScale } from '@/helpers/metrics';

const Icon = ({ name, focused }: { name: string; focused: boolean }) => {
  return {
    Home: <Home width={20} height={20} color={focused ? colors.white : colors.neutral.second} />,
    Settings: (
      <Settings width={20} height={20} color={focused ? colors.white : colors.neutral.second} />
    ),
    Message: (
      <Messages width={20} height={20} color={focused ? colors.white : colors.neutral.second} />
    ),
    Search: (
      <Search width={20} height={20} color={focused ? colors.white : colors.neutral.second} />
    ),
  }[name];
};
const IconButton = ({
  name,
  focused,
  onPress,
}: {
  name: string;
  focused: boolean;
  onPress(): void;
}) => {
  if (focused) {
    return (
      <View style={styles.focusedContainer}>
        <Icon name={name} focused={focused} />
        <Text style={styles.text}>{name}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={focused ? { selected: true } : {}}
      onPress={onPress}
      style={styles.container}
    >
      <Icon name={name} focused={focused} />
    </TouchableOpacity>
  );
};
const TabBar = (props: BottomTabBarProps) => {
  const { state, descriptors, navigation } = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height: verticalScale(70),
        width: '100%',
        paddingHorizontal: horizontalScale(4),
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };
        return <IconButton key={index} name={route.name} focused={isFocused} onPress={onPress} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusedContainer: {
    flex: 1.5,
    width: horizontalScale(92),
    flexDirection: 'row',
    borderRadius: 50,
    backgroundColor: colors.primary.main,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  text: {
    color: colors.white,
    marginLeft: horizontalScale(8),
  },
});

export default TabBar;
