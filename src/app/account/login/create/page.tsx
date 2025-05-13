import { Metadata } from "next";

// Estilos
import styles from "@/app/account/login/styles/login.module.scss";

// Componentes
import LoginCreate from "@/app/account/login/create/component/login-create-form";
import BackgroundPresentationForm from "@/components/presentations/background-presentation-form";

export const metadata: Metadata = {
  title: "Criar conta | ETHOS",
  description: "Crie a sua conta do site ETHOS.",
};

export default async function LoginCreatePage() {
  return (
    <section className={styles.login}>
      <div className={`${styles.content} container-login`}>
        <div className={styles.left}>
          <div className={styles.mask}>
            <h1 className="title">Criar Conta</h1>
            <LoginCreate />
          </div>
          <div className={styles.overlay} />
        </div>

        <BackgroundPresentationForm />
        <div className={styles.overlay}></div>
      </div>
    </section>
  );
}
