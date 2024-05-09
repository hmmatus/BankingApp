import { verticalScale } from '@/helpers/metrics';
import { colors } from '@/styles/color';
import { typography } from '@/styles/typography';
import { StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
interface BranchMarkerCardProps {
  title: string;
  address: string;
  onPress?: () => void;
  style?: TouchableOpacity['props']['style'];
}
const BranchMarkerCard = ({ title, address, onPress, style }: BranchMarkerCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
      <View style={{ flexDirection: 'row' }}>
        <Entypo name="location-pin" size={25} color={colors.primary.main} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.description}>{address}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral.third,
    height: verticalScale(37),
  },
  title: {
    ...typography.body1,
  },
  description: {
    ...typography.caption1,
  },
});

export default BranchMarkerCard;
