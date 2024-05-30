import { horizontalScale, verticalScale } from '@/helpers/metrics';
import { colors } from '@/styles/color';
import { typography } from '@/styles/typography';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
const AddNewBeneficiaryCard = ({ ...props }: TouchableOpacityProps) => {
  return (
    <TouchableOpacity {...props} style={[styles.container, props.style]}>
      <View style={styles.iconContainer}>
        <AntDesign name="plus" size={32} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: horizontalScale(100),
    height: verticalScale(120),
    borderRadius: 12,
  },
  iconContainer: {
    backgroundColor: colors.primary.main,
    width: horizontalScale(64),
    height: verticalScale(64),
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddNewBeneficiaryCard;
