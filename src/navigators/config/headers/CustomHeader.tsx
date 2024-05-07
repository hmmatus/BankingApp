import NotificationButton from '@/components/elements/buttons/NotificationButton';
import { horizontalScale, verticalScale } from '@/helpers/metrics';
import { colors } from '@/styles/color';
import { getFontSize } from '@/utils/getFontSize';
import { Platform, StyleSheet, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';

const isIos = Platform.OS === 'ios';

const CustomHeader = () => {
  const name = 'John Doe';
  const count = 10;
  return (
    <View style={styles.container}>
      <Avatar.Icon icon="folder" size={30} />
      <Text style={styles.text}>Hi, {name}</Text>
      <NotificationButton onPress={() => {}} count={count} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: colors.primary.main,
    height: isIos ? verticalScale(44) : verticalScale(56),
  },
  text: {
    color: colors.white,
    fontSize: getFontSize(16),
  },
});

export default CustomHeader;
