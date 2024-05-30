import { horizontalScale, verticalScale } from '@/helpers/metrics';
import { colors } from '@/styles/color';
import { typography } from '@/styles/typography';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

interface Props extends TouchableOpacityProps {
  img: string;
  name: string;
  selected?: boolean;
}
const BeneficiaryCard = ({ ...props }: Props) => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, props.selected ? styles.selected : styles.default]}
    >
      <Avatar.Image size={64} source={{ uri: props.img }} />
      <Text style={[styles.text, { color: props.selected ? colors.white : colors.neutral.main }]}>
        {props.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: horizontalScale(100),
    height: verticalScale(120),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
    borderRadius: 12,
  },
  default: {
    backgroundColor: colors.white,
  },
  selected: {
    backgroundColor: colors.primary.main,
  },
  text: {
    ...typography.body3,
  },
});

export default BeneficiaryCard;
