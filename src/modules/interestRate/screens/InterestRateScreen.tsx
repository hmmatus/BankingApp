import { colors } from '@/styles/color';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { InterestRateP, mockRatesData } from '../utils/ratesData';
import { typography } from '@/styles/typography';
import { verticalScale } from '@/helpers/metrics';

const RateHeader = () => {
  return (
    <View style={[styles.rowContainer]}>
      <Text style={[styles.itemText, styles.headerText, { flex: 3 }]}>Interest Kind</Text>
      <Text style={[styles.itemText, styles.headerText, { flex: 1 }]}>Deposit</Text>
      <Text style={[styles.itemText, styles.headerText, { flex: 1 }]}>Rate</Text>
    </View>
  );
};

const RateItem = ({ item }: { item: InterestRateP }) => {
  return (
    <View style={[styles.rowContainer, { marginVertical: verticalScale(4) }]}>
      <Text style={[styles.itemText, { flex: 3 }]}>{item.interestKind}</Text>
      <Text style={[styles.itemText, { flex: 1 }]}>{item.deposit}</Text>
      <Text style={[styles.itemText, { flex: 1, color: colors.primary.main }]}>{item.rate}</Text>
    </View>
  );
};
const InterestRateScreen = () => {
  const [data] = useState(mockRatesData);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        ListHeaderComponent={<RateHeader />}
        renderItem={({ item }) => <RateItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: verticalScale(12),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    ...typography.title3,
    color: colors.neutral.third,
  },
  itemText: {
    ...typography.body1,
    textAlign: 'center',
  },
});

export default InterestRateScreen;
