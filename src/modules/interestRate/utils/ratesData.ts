enum InterestKind {
  indCustomers = 'Individual customers',
  orgCustomers = 'Corporate customers',
}
export type InterestRateP = {
  interestKind: InterestKind;
  deposit: string;
  rate: string;
};
export const mockRatesData: InterestRateP[] = [
  {
    interestKind: InterestKind.indCustomers,
    deposit: '1m',
    rate: '0.1%',
  },
  {
    interestKind: InterestKind.orgCustomers,
    deposit: '10m',
    rate: '0.5%',
  },
  {
    interestKind: InterestKind.indCustomers,
    deposit: '5m',
    rate: '0.3%',
  },
];
