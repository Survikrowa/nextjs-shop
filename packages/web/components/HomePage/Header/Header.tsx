import { MobileMenu } from '../Menu/MobileMenu';

export const Header = () => {
  return (
    <header className="flex flex-col p-5 justify-around">
      <input type="text" className="border" placeholder="Wyszukaj produkt" />
      <MobileMenu />
    </header>
  );
};
