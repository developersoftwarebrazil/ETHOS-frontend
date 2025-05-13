import { Metadata } from "next";

// Estilos
import styles from "@/app/account/login/styles/login.module.scss";

// Componentes
import LoginLostForm from "@/app/account/login/lost/component/login-lost-form";
import BackgroundPresentationForm from "@/components/presentations/background-presentation-form";

export const metadata: Metadata = {
  title: "Perdeu ou esqueceu a sua senha | ETHOS",
  description: "Recupere a sua senha da conta do site ETHOS.",
};

export default function LoginLostPage() {
  return (
    <section className={styles.login}>
      <div className={`${styles.content} container-login`}>
        <div className={styles.left}>
          <div className={styles.mask}>
            <h1 className="title">Perdeu a Senha</h1>
            <LoginLostForm />
          </div>
          <div className={styles.overlay} />
        </div>
        <BackgroundPresentationForm />
        <div className={styles.overlay}></div>
      </div>
    </section>
  );
}
