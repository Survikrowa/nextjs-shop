import { FormHTMLAttributes } from 'react';
import styles from './Form.module.scss';

type FormProps = {
  children: React.ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export const Form = ({ onSubmit, children }: FormProps) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
