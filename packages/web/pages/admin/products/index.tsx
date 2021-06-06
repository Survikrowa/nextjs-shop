import { Navbar } from '@components/AdminPage/Navbar/Navbar';
import { ProductForm } from '@components/AdminPage/Products/ProductForm';

const ProductsPage = () => {
  return (
    <div>
      <Navbar /> Welcome on products page
      <ProductForm />
    </div>
  );
};
export default ProductsPage;
