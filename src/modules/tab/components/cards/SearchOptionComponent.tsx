import { horizontalScale, verticalScale } from '@/helpers/metrics';
import { colors } from '@/styles/color';
import { typography } from '@/styles/typography';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Text } from 'react-native-paper';

interface SearchOptionComponentProps {
  onPress(): void;
  title: string;
  description: string;
  image: JSX.Element;
  style?: TouchableOpacityProps['style'];
}
const SearchOptionComponent = ({
  onPress,
  title,
  description,
  image,
  style,
}: SearchOptionComponentProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.searchOptionContainer, style]}>
      <View style={styles.searchOptionTextContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <View style={styles.searchOptionImageContainer}>{image}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: verticalScale(110),
    backgroundColor: colors.white,
    paddingHorizontal: horizontalScale(16),
    borderRadius: 16,
  },
  searchOptionTextContainer: {
    flex: 3,
  },
  searchOptionImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    ...typography.title3,
  },
  descriptionText: {
    ...typography.caption1,
    color: colors.neutral.third,
    marginTop: verticalScale(4),
  },
});

export default SearchOptionComponent;
