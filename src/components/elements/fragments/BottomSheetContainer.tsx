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
    return (
      <BottomSheet enablePanDownToClose ref={ref} snapPoints={['60%']}>
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
