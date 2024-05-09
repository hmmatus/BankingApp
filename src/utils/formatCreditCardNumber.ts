export const formatCreditCardNumber = (creditCardNumber: string): string => {
  return `**** **** **** ${creditCardNumber.slice(-4)}`;
};
