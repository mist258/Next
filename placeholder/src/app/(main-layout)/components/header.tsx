import Link from "next/link";
import css from './Header.module.css'

export const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        
        <Link href="/users" className={css.navLink}>
          Users
        </Link>
        
        <Link href="/posts" className={css.navLink}>
          Posts
        </Link>

      
      </nav>
    </header>
  );
};
