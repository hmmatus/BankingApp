import { horizontalScale, verticalScale } from '@/helpers/metrics';
import { colors } from '@/styles/color';
import { typography } from '@/styles/typography';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Text } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const iconsList: { [key: string]: JSX.Element } = {
  'credit-card': <AntDesign name="creditcard" size={24} color={colors.white} />,
  user: <FontAwesome name="user" size={24} color={colors.white} />,
  bank: <FontAwesome name="bank" size={24} color={colors.white} />,
};
interface TransactionTypeCardProps extends TouchableOpacityProps {
  label: string;
  icon: string;
  selected?: boolean;
}
const TransactionTypeCard = ({ label, icon, selected, ...props }: TransactionTypeCardProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[props.style, styles.container, selected ? styles.selected : styles.default]}
    >
      {iconsList[icon]}
      <Text style={styles.title}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(120),
    height: verticalScale(100),
    borderRadius: 12,
    padding: 12,
  },
  default: {
    backgroundColor: colors.neutral.extraLight,
  },
  selected: {
    backgroundColor: colors.primary.main,
  },
  title: {
    ...typography.caption2,
    color: colors.white,
  },
});

export default TransactionTypeCard;
