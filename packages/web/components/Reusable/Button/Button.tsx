import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};
