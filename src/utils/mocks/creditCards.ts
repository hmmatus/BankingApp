import { CreditCardProps } from '@/modules/tab/components/cards/CreditCardComponent';
import { CardType, CreditCardI } from '@/models/creditCard.model';

export const mockCreditCards: CreditCardI[] = [
  {
    cardNumber: '1234 5678 9012 3456',
    cardHolderName: 'John Doe',
    nickname: 'Primary Card',
    expirationDate: '12/23',
    cvv: '123',
    cardType: CardType.VISA,
    amount: 1000,
  },
  {
    cardNumber: '1234 5678 9012 3456',
    cardHolderName: 'John Doe',
    nickname: 'Secondary Card',
    expirationDate: '12/23',
    cvv: '123',
    cardType: CardType.MASTERCARD,
    amount: 2000,
  },
  {
    cardNumber: '1234 5678 9012 3456',
    cardHolderName: 'John Doe',
    nickname: 'Tertiary Card',
    expirationDate: '12/23',
    cvv: '123',
    cardType: CardType.AMEX,
    amount: 3000,
  },
];
