import ScreenWrapper from '@/components/layouts/ScreenWrapper';
import { colors } from '@/styles/color';
import { StyleSheet, View } from 'react-native';
import ExchangeAmount from '@/assets/images/exchange-amount.svg';
import MainButton from '@/components/elements/buttons/MainButton';
import InputAmount from '../components/inputs/InputAmount';
import { useState } from 'react';
import { verticalScale } from '@/helpers/metrics';
import SelectArrows from '@/assets/icons/exchange/arrow-change.svg';
import { Text } from 'react-native-paper';
import { typography } from '@/styles/typography';
import { ExchangeScreenProps } from '@/navigators/ExchangeStack';
const ExchangeScreen = ({ navigation }: ExchangeScreenProps) => {
  const [exchangeData, setExchangeData] = useState({
    from: {
      value: '',
      currency: 'USD',
    },
    to: {
      value: '',
      currency: 'EUR',
    },
  });

  const handleSubmit = () => {
    navigation.navigate('Transfer');
  };

  return (
    <ScreenWrapper
      statusBarColor={colors.white}
      barStyle="dark-content"
      containerStyle={styles.container}
    >
      <ExchangeAmount />
      <View style={styles.card}>
        <InputAmount
          onPressRightButton={() => {}}
          buttonLabel={exchangeData.from.currency}
          label="From"
          error={''}
          inputProps={{
            value: exchangeData.from.value,
            keyboardType: 'decimal-pad',
            onChangeText: (value) => {
              setExchangeData((prev) => ({ ...prev, from: { ...prev.to, value } }));
            },
          }}
        />
        <SelectArrows style={{ alignSelf: 'center', marginVertical: verticalScale(12) }} />
        <InputAmount
          onPressRightButton={() => {}}
          buttonLabel={exchangeData.to.currency}
          label="To"
          error={''}
          inputProps={{
            value: exchangeData.to.value,
            onChangeText: (value) => {
              setExchangeData((prev) => ({ ...prev, to: { ...prev.to, value } }));
            },
            keyboardType: 'decimal-pad',
          }}
          containerStyle={{ marginBottom: verticalScale(20) }}
        />
        <View style={styles.rateContainer}>
          <Text style={[styles.text, { color: colors.primary.main, fontWeight: 'bold' }]}>
            Currency Rate
          </Text>
          <Text
            style={styles.text}
          >{`1 ${exchangeData.from.currency} = ${exchangeData.to.value} ${exchangeData.to.currency}`}</Text>
        </View>
        <MainButton onPress={handleSubmit} style={{ marginTop: 20 }}>
          Exchange
        </MainButton>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: colors.primary.main,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    ...typography.body3,
  },
});

export default ExchangeScreen;
