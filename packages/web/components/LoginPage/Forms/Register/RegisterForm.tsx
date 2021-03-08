import { Formik } from 'formik';
import Link from 'next/link';
import { Form } from '@components/Reusable/Form/Form';
import { Button } from '@components/Reusable/Button/Button';
import { Input } from '@components/Reusable/Input/Input';

export const RegisterForm = () => {
  return (
    <>
      <Formik
        initialValues={{ username: '', password: '', email: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit, handleChange, values: { username, password, email }, errors }) => (
          <Form className="flex flex-col" onSubmit={handleSubmit}>
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
            <Input
              type="email"
              name="email"
              label="Enter your email"
              value={email}
              onChange={handleChange}
            />
            {errors.email}
            <Button type="submit">Log in</Button>
          </Form>
        )}
      </Formik>
      <Link href="/login/form?type=login">
        <a>Already registered? Log in then.</a>
      </Link>
    </>
  );
};
