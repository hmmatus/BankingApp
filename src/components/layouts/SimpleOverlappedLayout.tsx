import { colors } from '@/styles/color';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

interface SimpleOverlappedLayoutProps {
  children: React.ReactNode;
}
const SimpleOverlappedLayout = ({ children }: SimpleOverlappedLayoutProps) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary.main} />
      <View style={styles.overlappedContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.primary.main,
  },
  overlappedContainer: {
    flex: 1,
    zIndex: 2,
    marginTop: 16,
    paddingTop: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: colors.white,
  },
});

export default SimpleOverlappedLayout;
