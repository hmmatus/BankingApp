import CreditCardListComponent from '@/components/elements/cards/CreditCardListComponent';
import OptionMenuHomeCard from '@/components/elements/cards/OptionMenuHomeCard';
import SimpleOverlappedLayout from '@/components/layouts/SimpleOverlappedLayout';
import { verticalScale } from '@/helpers/metrics';
import { colors } from '@/styles/color';
import { menuHome } from '@/utils/menuHome';
import { mockCreditCards } from '@/utils/mocks/creditCards';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <SimpleOverlappedLayout>
      <FlatList
        data={menuHome}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
        style={styles.container}
        ListHeaderComponent={<CreditCardListComponent cards={mockCreditCards} />}
        ListHeaderComponentStyle={{ marginBottom: verticalScale(20) }}
        renderItem={({ item }) => <OptionMenuHomeCard item={item} onPress={() => {}} />}
      />
    </SimpleOverlappedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default HomeScreen;
