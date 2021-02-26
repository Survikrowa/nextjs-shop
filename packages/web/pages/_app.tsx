import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

const ShopApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default ShopApp;
