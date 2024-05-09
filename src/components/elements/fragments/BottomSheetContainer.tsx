import { colors } from '@/styles/color';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useRef } from 'react';
import { StyleSheet } from 'react-native';

interface BottomSheetContainerProps {
  children: JSX.Element;
}
// example of ref const bottomSheetRef = useRef<BottomSheet>(null);
const BottomSheetContainer = React.forwardRef<BottomSheet, BottomSheetContainerProps>(
  (props, ref) => {
    const { children } = props;
    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index);
    }, []);
    return (
      <BottomSheet ref={ref} onChange={handleSheetChanges} snapPoints={['50%', '40%']}>
        <BottomSheetView style={styles.container}>{children}</BottomSheetView>
      </BottomSheet>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: colors.white,
  },
});

export default BottomSheetContainer;
