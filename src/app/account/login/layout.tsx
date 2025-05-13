// src/app/account/login/layout.tsx
import styles from "./styles/login.module.scss";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.login}>
      <div className={styles.forms}>{children}</div>
    </main>
  );
}
