import { View } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { horizontalScale, verticalScale } from '@/helpers/metrics';
import IconButton from './TabBarIconButton';

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

export default TabBar;
