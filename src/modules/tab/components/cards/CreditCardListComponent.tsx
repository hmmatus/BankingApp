import React from 'react';
import CreditCardComponent, { CreditCardProps } from './CreditCardComponent';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { CreditCardI } from '@/models/creditCard.model';
import { colors } from '@/styles/color';
import { verticalScale } from '@/helpers/metrics';
const cardColorList = [colors.semantic.danger, colors.primary.main, colors.semantic.info];
interface CreditCardListComponentProps {
  cards: CreditCardI[]; // Array of card data
}

const CreditCardListComponent = ({ cards }: CreditCardListComponentProps) => {
  const visibleCards = cards.slice(0, 3);
  if (visibleCards.length === 0) {
    return null;
  }
  return (
    <TouchableOpacity style={styles.container}>
      {visibleCards.map((card, index) => (
        <CreditCardComponent
          key={index}
          card={card}
          style={{
            zIndex: index + 1,
            position: 'absolute',
            bottom: index * 10,
            backgroundColor: cardColorList[index],
          }}
        />
      ))}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(250),
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CreditCardListComponent;
