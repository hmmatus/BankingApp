import { horizontalScale, verticalScale } from '@/helpers/metrics';
import { colors } from '@/styles/color';
import { getFontSize } from '@/utils/getFontSize';
import { StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import MastercardIcon from '@/assets/images/mastercard.svg';
import VisaIcon from '@/assets/images/visa.svg';
import { CardType, CreditCardI } from '@/models/creditCard.model';
import { formatCreditCardNumber } from '@/utils/formatCreditCardNumber';
const CardIconList = {
  [CardType.MASTERCARD]: <MastercardIcon />,
  [CardType.VISA]: <VisaIcon />,
  [CardType.AMEX]: <Text style={{ color: colors.white }}>AMEX</Text>,
};
export interface CreditCardProps {
  card: CreditCardI;
  onPress?(): void;
  style?: TouchableOpacity['props']['style'];
}
const CreditCardComponent = ({ card, onPress, style }: CreditCardProps) => {
  const { cardHolderName, nickname, amount, cardType = CardType.VISA, cardNumber } = card;
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.text, styles.nameText]}>{cardHolderName}</Text>
      <View>
        <Text style={[styles.text, styles.nicknameText]}>{nickname}</Text>
        <Text style={[styles.text, styles.cardText]}>{formatCreditCardNumber(cardNumber)}</Text>
        <Text style={[styles.text, styles.amountText]}>$ {amount.toLocaleString()}</Text>
      </View>
      <View style={styles.cardType}>{CardIconList[cardType]}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(327),
    height: verticalScale(204),
    padding: 12,
    borderRadius: 16,
    backgroundColor: colors.primary.main,
    justifyContent: 'space-evenly',
  },
  text: {
    color: colors.white,
  },
  nameText: {
    fontSize: getFontSize(24),
  },
  nicknameText: {
    fontSize: getFontSize(14),
  },
  cardText: {
    fontSize: getFontSize(16),
    marginVertical: verticalScale(8),
  },
  amountText: {
    fontSize: getFontSize(20),
    fontWeight: '700',
  },
  cardType: {
    position: 'absolute',
    right: 16,
    bottom: 12,
  },
});

export default CreditCardComponent;
