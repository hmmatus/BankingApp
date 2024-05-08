import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  username: yup.string().email().required('Username is required'),
  phone: yup.string().required('Phone is required'),
  password: yup.string().min(6).required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), ''], 'Passwords must match'),
});
