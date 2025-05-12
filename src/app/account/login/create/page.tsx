import { Metadata } from "next";

import styles from "@/app/account/login/styles/login.module.scss";

import LoginCreate from "@/app/account/login/components/create/login-create-form";
import BackgroundPresentationForm from "@/components/presentations/background-presentation-form";

export const metadata: Metadata = {
  title: "Criar conta | ETHOS",
  description: "Crie a sua conta do site ETHOS.",
};

export default async function LoginPage() {
  return (
    <section className={styles.login}>
      {/* Fundo branco translúcido */}

      <div className={`${styles.content} container-login`}>
        {/* Lado esquerdo: Login */}
        <div className={styles.left}>
          <div className={styles.mask}>
            <h1 className="title">Criar Conta</h1>
            <LoginCreate />
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
