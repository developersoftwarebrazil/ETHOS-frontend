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
          <div className={styles.logged}>
            <span className={styles.spanWelcome}>
              Bem vindo{" "}
              <span className={styles.spanName}>
                <Link href={"/management/roles/users"}>{data.username}</Link>
              </span>{" "}
            </span>
            <ul className={styles.menu}>
              <li>
                <Link href="/">VER SITE</Link>
              </li>
              <li>
                <Link href="/management/roles/users/edit">ALTERAR SENHA</Link>
              </li>
              <li>
                <Link href="/account/logout">SAIR</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link className={styles.login} href="/account/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
