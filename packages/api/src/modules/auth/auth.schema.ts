import joi from 'joi';

const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])');
interface UserCredentials {
  username: string;
  password: string;
  email: string;
}

export const userRegisterSchema = joi.object<UserCredentials>({
  username: joi.string().required().min(6),
  password: joi.string().required().min(8).pattern(passwordRegex),
  email: joi.string().email().required(),
});
