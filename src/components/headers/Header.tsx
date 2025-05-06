import userGet from "@/actions/user-get";
import styles from "./Header.module.scss";
import Link from "next/link";

export default async function Header() {
  const { data } = await userGet();
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href="/">
          Ethos
        </Link>
        {data ? (
          <Link className={styles.login} href="/account">
            <Link href={"/account/profile"}>{data.username}</Link>
          </Link>
        ) : (
          <Link className={styles.login} href="/account/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
