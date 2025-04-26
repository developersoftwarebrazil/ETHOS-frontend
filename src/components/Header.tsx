import  styles  from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  const user = false; // Simulating user authentication status
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>	
        <Link className={styles.logo} href='/' >Ethos</Link>
      {user ? <Link className={styles.login} href="/account">exemplo@user.com</Link>:
      <Link className={styles.login} href="/account/login">Login / Criar</Link>}
      </nav>
    </header>
  );
}
