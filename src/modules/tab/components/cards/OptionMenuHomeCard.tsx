import { horizontalScale, verticalScale } from '@/helpers/metrics';
import { colors } from '@/styles/color';
import { getFontSize } from '@/utils/getFontSize';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

interface OptionMenuHomeCardProps {
  item: {
    text: string;
    image: JSX.Element;
  };
  onPress(): void;
}
const OptionMenuHomeCard = ({ item, onPress }: OptionMenuHomeCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {item.image}
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: verticalScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderRadius: 16,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  text: {
    fontSize: getFontSize(12),
    color: colors.neutral.third,
    marginTop: verticalScale(8),
  },
});

export default OptionMenuHomeCard;
