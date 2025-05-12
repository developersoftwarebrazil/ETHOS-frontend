import styles from "./styles/login.module.scss";

import LoginForm from "@/app/account/login/components/login-form";
import BackgroundPresentationForm from "@/components/presentations/background-presentation-form";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | ETHOS",
  description: "Logue na sua conta do site ETHOS.",
};

export default async function LoginPage() {
  return (
    <section className={styles.login}>
      {/* Fundo branco translúcido */}

      <div className={`${styles.content} container-login`}>
        {/* Lado esquerdo: Login */}
        <div className={styles.left}>
          <div className={styles.mask}>
            <h1 className="title">Login</h1>
            <LoginForm />
          </div>
          <div className={styles.overlay} />
        </div>
        {/* Lado direito: Apresentação */}
        <BackgroundPresentationForm />
        <div className={styles.overlay}></div> {/* Overlay vem por último! */}
      </div>
    </section>
  );
}
