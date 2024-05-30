import * as yup from 'yup';

export const transferSchema = yup.object().shape({
  name: yup.string().required(),
  card: yup.string().required(),
  amount: yup.string().required(),
  content: yup.string().required(),
});
