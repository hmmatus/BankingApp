import Wallet from '@/assets/icons/home/wallet.svg';
import Transfer from '@/assets/icons/home/transfer.svg';
import WidthDraw from '@/assets/icons/home/withdraw.svg';
import MobileTransfer from '@/assets/icons/home/mobile-transfer.svg';
import Bill from '@/assets/icons/home/bill.svg';
import Save from '@/assets/icons/home/save.svg';
import Card from '@/assets/icons/home/card.svg';
import Report from '@/assets/icons/home/report.svg';
import Beneficiary from '@/assets/icons/home/contacts.svg';
export const menuHome = [
  {
    text: 'Account and Card',
    image: <Wallet />,
  },
  {
    text: 'Transfer',
    image: <Transfer />,
  },
  {
    text: 'Withdraw',
    image: <WidthDraw />,
  },
  {
    text: 'Mobile prepaid',
    image: <MobileTransfer />,
  },
  {
    text: 'Pay the bill',
    image: <Bill />,
  },
  {
    text: 'Save online',
    image: <Save />,
  },
  {
    text: 'Credit Card',
    image: <Card />,
  },
  {
    text: 'Transaction report',
    image: <Report />,
  },
  {
    text: 'Beneficiary',
    image: <Beneficiary />,
  },
];
