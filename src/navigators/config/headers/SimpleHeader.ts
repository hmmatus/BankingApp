import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useTheme, MD3Colors } from 'react-native-paper';
export const simpleHeaderOptions = (): NativeStackNavigationOptions => {
  const theme = useTheme();
  return {
    headerTintColor: theme.colors.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerStyle: {
      backgroundColor: theme.colors.primary,
    },
  };
};
