import joi from 'joi';

const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])');
interface UserRegisterCredentials {
  username: string;
  password: string;
  email: string;
}
interface UserLoginCredentials {
  username: string;
  password: string;
}

export const userRegisterSchema = joi.object<UserRegisterCredentials>({
  username: joi.string().required().min(6),
  password: joi.string().required().min(8).pattern(passwordRegex),
  email: joi.string().email().required(),
});

export const userLogInSchema = joi.object<UserLoginCredentials>({
  username: joi.string().required().min(6),
  password: joi.string().required().min(8).pattern(passwordRegex),
});
