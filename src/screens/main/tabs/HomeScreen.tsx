import CreditCardListComponent from '@/components/elements/cards/CreditCardListComponent';
import SimpleOverlappedLayout from '@/components/layouts/SimpleOverlappedLayout';
import { mockCreditCards } from '@/utils/mocks/creditCards';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <SimpleOverlappedLayout>
      <FlatList
        data={Array.from({ length: 10 }, (_, i) => i.toString())}
        keyExtractor={(item) => item}
        numColumns={3}
        style={styles.container}
        ListHeaderComponent={<CreditCardListComponent cards={mockCreditCards} />}
        renderItem={({ item }) => (
          <View style={{ flex: 1, padding: 16, backgroundColor: 'white', marginVertical: 8 }}>
            <Text>Item {item}</Text>
          </View>
        )}
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
