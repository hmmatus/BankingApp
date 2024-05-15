import { ExchangeRate } from '../models/rate.model';

export const mockExchangeData: ExchangeRate[] = [
  {
    id: 1,
    country: 'United States',
    countryCode: 'US',
    buy: 1.0,
    sell: 1.0,
  },
  {
    id: 2,
    country: 'United Kingdom',
    countryCode: 'GB',
    buy: 0.7,
    sell: 0.7,
  },
  {
    id: 3,
    country: 'European Union',
    countryCode: 'EU',
    buy: 0.9,
    sell: 0.9,
  },
  {
    id: 4,
    country: 'Japan',
    countryCode: 'JP',
    buy: 100.0,
    sell: 100.0,
  },
  {
    id: 5,
    country: 'China',
    countryCode: 'CN',
    buy: 7.0,
    sell: 7.0,
  },
];
