import styles from "./styles/login.module.scss";

export default async function LoginLayout({ children,}:{children: React.ReactNode;}) {
  return (
    <div className={styles.login}>
      <div className={styles.forms}>{children}</div>
    </div>
  );
}
