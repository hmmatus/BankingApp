import { colors } from '@/styles/color';
import { BottomSheetProps, BottomSheetView } from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import React, { useCallback, useRef } from 'react';
import { StyleSheet } from 'react-native';

interface BottomSheetContainerProps {
  children: JSX.Element;
  ref: React.RefObject<BottomSheet>;
}
// example of ref const bottomSheetRef = useRef<BottomSheet>(null);
const BottomSheetContainer = ({ children, ref }: BottomSheetContainerProps) => {
  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <BottomSheet ref={ref} onChange={handleSheetChanges} snapPoints={[200, '50%']}>
      <BottomSheetView style={styles.container}>{children}</BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: colors.white,
  },
});

export default BottomSheetContainer;
