export type BeneficiaryP = {
  id: number;
  name: string;
  accountNumber: string;
  bankName: string;
  bankCode: string;
  country: string;
  currency: string;
  status: string;
  img: string;
};
export const beneficiaryList = [
  {
    id: 1,
    name: 'John Doe',
    accountNumber: '1234567890',
    bankName: 'Bank of America',
    bankCode: 'BOFAUS3N',
    country: 'United States',
    currency: 'USD',
    status: 'Active',
    img: 'https://randomuser.me/api/portraits',
  },
  {
    id: 2,
    name: 'Jane Doe',
    accountNumber: '0987654321',
    bankName: 'Wells Fargo',
    bankCode: 'WFBIUS6S',
    country: 'United States',
    currency: 'USD',
    status: 'Inactive',
    img: 'https://randomuser.me/api/portraits',
  },
  {
    id: 3,
    name: 'John Smith',
    accountNumber: '1234567890',
    bankName: 'Bank of America',
    bankCode: 'BOFAUS3N',
    country: 'United States',
    currency: 'USD',
    status: 'Active',
    img: 'https://randomuser.me/api/portraits',
  },
  {
    id: 4,
    name: 'Jane Smith',
    accountNumber: '0987654321',
    bankName: 'Wells Fargo',
    bankCode: 'WFBIUS6S',
    country: 'United States',
    currency: 'USD',
    status: 'Inactive',
    img: 'https://randomuser.me/api/portraits',
  },
];
