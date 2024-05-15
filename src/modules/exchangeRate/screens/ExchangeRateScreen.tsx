import { colors } from '@/styles/color';
import { StatusBar, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { mockExchangeData } from '../utils/mockData';
import ExchangeRateCard from '../components/cards/ExchangeRateCard';
import { Text } from 'react-native-paper';
import { typography } from '@/styles/typography';
import { verticalScale } from '@/helpers/metrics';

const ListHeaderComponent = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.headerText, { flex: 3 }]}>Country</Text>
      <Text style={[styles.headerText, { flex: 1 }]}>Buy</Text>
      <Text style={[styles.headerText, { flex: 1 }]}>Sell</Text>
    </View>
  );
};
const ExchangeRateScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={mockExchangeData}
        renderItem={({ item }) => <ExchangeRateCard exchangeRate={item} />}
        ListHeaderComponent={<ListHeaderComponent />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(8),
  },
  headerText: {
    ...typography.title3,
    textAlign: 'center',
  },
});

export default ExchangeRateScreen;
