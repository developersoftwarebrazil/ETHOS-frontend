// src/app/account/login/page.tsx
import styles from "./styles/login.module.scss";
import LoginForm from "@/app/account/login/components/login-form";
import BackgroundPresentationForm from "@/components/presentations/background-presentation-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | ETHOS",
  description: "Logue na sua conta do site ETHOS.",
};

export default function LoginPage() {
  return (
    <section className={styles.login}>
      <div className={`${styles.content} container-login`}>
        <div className={styles.left}>
          <div className={styles.mask}>
            <h1 className="title">Login</h1>
            <LoginForm />
          </div>
          <div className={styles.overlay} />
        </div>

        <BackgroundPresentationForm />
      </div>
    </section>
  );
}
