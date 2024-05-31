import ScreenWrapper from '@/components/layouts/ScreenWrapper';
import { colors } from '@/styles/color';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import InputSelectCard from '../components/inputs/InputSelectCard';
import { useEffect, useState } from 'react';
import { typography } from '@/styles/typography';
import {
  TransactionItemP,
  TransactionType,
  mockTransactionTypes,
} from '../utils/mocks/transactionTypes';
import TransactionTypeCard from '../components/cards/TransactionTypeCard';
import { verticalScale } from '@/helpers/metrics';
import BeneficiaryCard from '../components/cards/BeneficiaryCard';
import { BeneficiaryP, beneficiaryList } from '../utils/mocks/beneficiaryList';
import AddNewBeneficiaryCard from '../components/cards/AddNewBeneficiaryCard';
import TransferForm, { TransferFormDataI } from '../components/forms/transfer/TransferForm';

const TransferScreen = () => {
  const [selectedCard, setSelectedCard] = useState('');
  const [operation, setOperation] = useState({} as TransactionItemP);
  const [beneficiary, setBeneficiary] = useState({} as BeneficiaryP);
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
  const selectBeneficiary = (item: BeneficiaryP) => {
    setBeneficiary(item);
  };

  const handleSubmit = (data: TransferFormDataI) => {
    console.log(data);
  };
  return (
    <ScrollView>
      <ScreenWrapper barStyle="dark-content" statusBarColor={colors.white}>
        <View style={styles.container}>
          <InputSelectCard
            selectedValue={selectedCard}
            items={cardsList}
            onChangeValue={() => {}}
          />
          <Text
            style={styles.availableText}
          >{`Available Balance: ${balance.toLocaleString()}`}</Text>
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
            style={{ height: verticalScale(130) }}
          />
          <View style={styles.flexSpaceBetween}>
            <Text style={styles.listHeaderText}>Choose beneficiary</Text>
            <Text style={[styles.listHeaderText, { color: colors.primary.main }]}>
              Find beneficiary
            </Text>
          </View>
          <FlatList
            horizontal
            data={beneficiaryList}
            ListHeaderComponent={
              <View>
                <AddNewBeneficiaryCard onPress={() => {}} />
              </View>
            }
            renderItem={({ item, index }) => (
              <BeneficiaryCard
                key={index}
                selected={item.id === beneficiary.id}
                name={item.name}
                img={item.img}
                onPress={() => selectBeneficiary(item)}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
            style={{ height: verticalScale(130), marginVertical: verticalScale(10) }}
          />
          <TransferForm onSubmit={handleSubmit} />
        </View>
      </ScreenWrapper>
    </ScrollView>
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
