import ScreenWrapper from '@/components/layouts/ScreenWrapper';
import { colors } from '@/styles/color';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import ExchangeAmount from '@/assets/images/exchange-amount.svg';

const ExchangeScreen = () => {
  return (
    <ScreenWrapper
      statusBarColor={colors.white}
      barStyle="dark-content"
      containerStyle={styles.container}
    >
      <ExchangeAmount />
      <Text>Exchange Screen</Text>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});

export default ExchangeScreen;
