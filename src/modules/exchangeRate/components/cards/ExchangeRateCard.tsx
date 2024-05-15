import { typography } from '@/styles/typography';
import { StyleSheet, View } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import { Text } from 'react-native-paper';
import { ExchangeRate } from '../../models/rate.model';
import { colors } from '@/styles/color';
import { horizontalScale, verticalScale } from '@/helpers/metrics';

const ExchangeRateCard = ({ exchangeRate }: { exchangeRate: ExchangeRate }) => {
  return (
    <View style={[styles.rowContainer, styles.cardContainer]}>
      <View style={[styles.rowContainer, { flex: 3 }]}>
        <CountryFlag isoCode={exchangeRate.countryCode} size={32} />
        <Text style={[styles.itemText, { marginLeft: horizontalScale(4) }]}>
          {exchangeRate.country}
        </Text>
      </View>
      <Text style={[styles.itemText, { flex: 1 }]}>{exchangeRate.buy.toLocaleString()}</Text>
      <Text style={[styles.itemText, { flex: 1 }]}>{exchangeRate.sell.toLocaleString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
  },
  cardContainer: {
    justifyContent: 'space-between',
    borderBottomColor: colors.neutral.extraLight,
    borderBottomWidth: 1,
    marginBottom: verticalScale(12),
  },
  itemText: {
    ...typography.body1,
    textAlign: 'center',
  },
});

export default ExchangeRateCard;
