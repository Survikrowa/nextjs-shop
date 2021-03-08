import { FormHTMLAttributes } from 'react';

type FormProps = {
  children: React.ReactNode;
  className: string;
} & FormHTMLAttributes<HTMLFormElement>;

export const Form = ({ onSubmit, children, className }: FormProps) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
