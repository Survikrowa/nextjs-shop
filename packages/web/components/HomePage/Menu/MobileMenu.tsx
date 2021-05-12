import Link from 'next/link';
export const MobileMenu = () => {
  return (
    <nav className="fixed bottom-0 left-0 md:hidden container bg-white shadow-2xl">
      <ul className="flex justify-evenly p-1">
        <li>
          <Link href="/login/form?type=login">
            <a>
              <img src="/user-icon.svg" alt="cart icon" width="50" height="50" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <a>
              <img src="/shopping-cart.svg" alt="cart icon" width="50" height="50" />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
