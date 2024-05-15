import { SafeAreaView, StatusBar, StyleSheet, ViewStyle } from 'react-native';

interface ScreenWrapperProps {
  children: React.ReactNode;
  containerStyle?: ViewStyle;
  statusBarColor?: string;
  barStyle?: 'light-content' | 'dark-content';
}
const ScreenWrapper = ({
  containerStyle,
  barStyle,
  statusBarColor,
  children,
}: ScreenWrapperProps) => {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <StatusBar barStyle={barStyle} backgroundColor={statusBarColor} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ScreenWrapper;
