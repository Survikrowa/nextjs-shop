import { Button } from '@components/Reusable/Button/Button';
import { Form } from '@components/Reusable/Form/Form';
import { Input } from '@components/Reusable/Input/Input';
import { Formik } from 'formik';
import { ProductSchema } from './Product.schema';

export const ProductForm = () => {
  return (
    <Formik
      initialValues={{ productName: '', productPrice: '0,00', productDescription: '' }}
      validationSchema={ProductSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, values: { productDescription, productName, productPrice }, errors }) => (
        <Form>
          <Input
            name="productName"
            type="text"
            label="Product Name"
            onChange={handleChange}
            value={productName}
          />
          {errors.productName && errors.productName}
          <Input
            name="productPrice"
            type="text"
            label="Product Price"
            onChange={handleChange}
            value={productPrice}
          />
          {errors.productPrice && errors.productPrice}
          <Input
            name="productDescription"
            type="text"
            label="Product Description"
            onChange={handleChange}
            value={productDescription}
          />
          {errors.productDescription && errors.productDescription}
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};
