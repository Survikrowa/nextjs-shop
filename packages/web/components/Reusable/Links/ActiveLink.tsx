import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import styles from './ActiveLink.module.scss';

type ActiveLinkProps = {
  href: string;
  children: React.ReactChild;
};

export const ActiveLink = ({ children, href }: ActiveLinkProps) => {
  const { asPath } = useRouter();
  const isHrefMatchPath = asPath === href;
  const isActive = isHrefMatchPath ? 'text-black-900' : 'text-blue-400';
  return (
    <Link href={href}>
      <a className={clsx(isActive, isHrefMatchPath && styles.disabledAnchor)}>{children}</a>
    </Link>
  );
};
