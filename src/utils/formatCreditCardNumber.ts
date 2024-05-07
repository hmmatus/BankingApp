export const formatCreditCardNumber = (creditCardNumber: string): string => {
  const maskedCreditCardNumber = creditCardNumber
    .trim()
    .replace(/^(\d{4})\d(?=\d{4})|\d(?=\d{4})/g, '*');
  return maskedCreditCardNumber;
};
