import * as yup from 'yup';

const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])');

export const userRegisterSchema = yup.object().shape({
  username: yup.string().required().min(6),
  password: yup.string().required().min(8).matches(passwordRegex),
  email: yup.string().email().required(),
});
