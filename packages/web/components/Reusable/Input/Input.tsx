import { InputHTMLAttributes } from 'react';

type InputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <label>
      {label}
      <input className="border" {...props} />
    </label>
  );
};
