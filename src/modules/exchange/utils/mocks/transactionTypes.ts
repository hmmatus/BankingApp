export enum TransactionType {
  CARDNUMBER = 'transfer-number',
  BANK = 'transfer-bank',
  UNI = 'transfer-uni',
}
export type TransactionItemP = {
  icon: string;
  label: string;
  value: TransactionType;
};
export const mockTransactionTypes = [
  {
    icon: 'credit-card',
    label: 'Transfer via card number',
    value: TransactionType.CARDNUMBER,
  },
  {
    icon: 'bank',
    label: 'Transfer to the same bank',
    value: TransactionType.BANK,
  },
  {
    icon: 'user',
    label: 'Transfer to another bank',
    value: TransactionType.UNI,
  },
];
