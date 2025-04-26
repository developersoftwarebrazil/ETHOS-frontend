import Link from "next/link";
import styles from "./Footer.module.scss";

export default async function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        {" "}
        <span>
          <Link className={styles.logo} href="/">
            Ethos
          </Link>
        </span>
        . Todos os diretios reservados.
      </p>
    </footer>
  );
}
