import { Product } from '../Product/Product';

export const Products = () => {
  return (
    <main>
      {[0, 1, 2, 3].map((item) => (
        <Product key={item} />
      ))}
    </main>
  );
};
