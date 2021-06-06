import { Formik } from 'formik';
import Link from 'next/link';
import { Form } from '@components/Reusable/Form/Form';
import { Button } from '@components/Reusable/Button/Button';
import { Input } from '@components/Reusable/Input/Input';

export const LoginForm = () => {
  return (
    <>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit, handleChange, values: { username, password }, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="username"
              label="Enter your username"
              value={username}
              onChange={handleChange}
            />
            {errors.username}
            <Input
              type="password"
              name="password"
              label="Enter your password"
              value={password}
              onChange={handleChange}
            />
            {errors.password}
            <Button type="submit">Log in</Button>
          </Form>
        )}
      </Formik>
      <Link href="/login/form?type=register">
        <a>Don{"'"}t have an account? Register here!</a>
      </Link>
    </>
  );
};
