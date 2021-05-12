import { Header } from 'components/HomePage/Header/Header';
import { Products } from 'components/HomePage/Products/Products';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shop</title>
      </Head>
      <Header />
      <Products />
    </div>
  );
}
