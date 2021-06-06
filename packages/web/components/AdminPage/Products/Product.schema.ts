import { object, string } from 'yup';

export const ProductSchema = object({
  productName: string().required(),
  productPrice: string().required(),
  productDescription: string().required(),
});
