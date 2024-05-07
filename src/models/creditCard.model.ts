export enum CardType {
  VISA = 'visa',
  MASTERCARD = 'mastercard',
  AMEX = 'amex',
}
export interface CreditCardI {
  cardNumber: string;
  cardHolderName: string;
  nickname: string;
  expirationDate: string;
  cvv: string;
  cardType: CardType;
  amount: number;
}
