import Link from "next/link";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <header className={css.Header}>
      <nav className={css.Nav}>
        <Link href="/users" className={css.NavLink}>
          Users
        </Link>

        <Link href="/posts" className={css.NavLink}>
          Posts
        </Link>
        <Link href="/about" className={css.NavLink}>
          About
        </Link>
      </nav>
    </header>
  );
};
