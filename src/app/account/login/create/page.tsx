import { Metadata } from "next";
import styles from "@/app/account/login/login.module.scss";
import LoginPresentation from "@/components/account/login/presentations/login-presentation-form";
import LoginCreate from "@/components/account/login/create/login-create-form";

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
        <LoginPresentation />
        <div className={styles.overlay}></div> {/* Overlay vem por último! */}
      </div>
    </section>
  );
}
