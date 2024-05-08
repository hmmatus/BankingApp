import { FlatList, StyleSheet, Text, View } from 'react-native';
import Branch from '@/assets/images/branch.svg';
import InterestRate from '@/assets/images/interest-rate.svg';
import ExchangeRate from '@/assets/images/exchange-rate.svg';
import SearchOptionComponent from '../components/cards/SearchOptionComponent';
import { verticalScale } from '@/helpers/metrics';
import { SearchNavProps } from '@/navigators/Tabs';
const itemsOptionsList = [
  {
    id: 'Branch',
    title: 'Branch',
    description: 'Search for branch',
    image: <Branch />,
  },
  {
    id: 'InterestRate',
    title: 'Interest Rate',
    description: 'Search for interest rate',
    image: <InterestRate />,
  },
  {
    id: 'ExchangeRate',
    title: 'Exchange Rate',
    description: 'Search for Exchange Rate',
    image: <ExchangeRate />,
  },
  {
    id: 'Exchange',
    title: 'Exchange',
    description: 'Exchange amount of money',
    image: <ExchangeRate />,
  },
];
const SearchScreen = ({ navigation, route }: SearchNavProps) => {
  return (
    <FlatList
      style={styles.container}
      data={itemsOptionsList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <SearchOptionComponent
          style={{ marginBottom: verticalScale(12) }}
          {...item}
          onPress={() => {}}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
  },
});

export default SearchScreen;
