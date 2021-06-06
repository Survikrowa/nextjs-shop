import { ActiveLink } from '../../Reusable/Links/ActiveLink';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <ActiveLink href="/admin/products">Products</ActiveLink>
        </li>
      </ul>
    </nav>
  );
};
