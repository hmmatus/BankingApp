import * as yup from 'yup';
export const changePasswordValidation = yup.object().shape({
  password: yup.string().required('Password is required'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Repeat password is required'),
});
