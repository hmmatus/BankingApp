import ScreenWrapper from '@/components/layouts/ScreenWrapper';
import { colors } from '@/styles/color';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import InputSelectCard from '../components/inputs/InputSelectCard';
import { useState } from 'react';
import { typography } from '@/styles/typography';
import {
  TransactionItemP,
  TransactionType,
  mockTransactionTypes,
} from '../utils/mocks/transactionTypes';
import TransactionTypeCard from '../components/cards/TransactionTypeCard';
import { verticalScale } from '@/helpers/metrics';

const TransferScreen = () => {
  const [selectedCard, setSelectedCard] = useState('');
  const [operation, setOperation] = useState({} as TransactionItemP);
  const cardsList = [
    {
      label: 'Mastercard',
      value: '12345679',
    },
    {
      label: 'Mastercard',
      value: '12345679',
    },
    {
      label: 'Mastercard',
      value: '12345679',
    },
  ];
  const [balance, setBalance] = useState(1000);
  const selectTransactionType = (item: TransactionItemP) => {
    if (item.value !== operation.value) {
      setOperation(item);
    }
  };
  return (
    <ScreenWrapper barStyle="dark-content" statusBarColor={colors.white}>
      <View style={styles.container}>
        <InputSelectCard selectedValue={selectedCard} items={cardsList} onChangeValue={() => {}} />
        <Text style={styles.availableText}>{`Available Balance: ${balance.toLocaleString()}`}</Text>
        <Text style={styles.listHeaderText}>Choose transaction</Text>
        <FlatList
          horizontal
          data={mockTransactionTypes}
          renderItem={({ item, index }) => (
            <TransactionTypeCard
              key={index}
              selected={item.value === operation.value}
              label={item.label}
              icon={item.icon}
              onPress={() => selectTransactionType(item)}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          style={{ maxHeight: verticalScale(130) }}
        />
        <View style={styles.flexSpaceBetween}>
          <Text style={styles.listHeaderText}>Choose beneficiary</Text>
          <Text style={[styles.listHeaderText, { color: colors.primary.main }]}>
            {operation.label}
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: colors.white,
  },
  availableText: {
    ...typography.caption1,
    color: colors.primary.main,
    marginVertical: 12,
  },
  listHeaderText: {
    ...typography.caption1,
    color: colors.neutral.main,
    marginBottom: verticalScale(12),
  },
  flexSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TransferScreen;
