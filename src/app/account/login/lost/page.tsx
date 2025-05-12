import { Metadata } from "next";

import styles from "@/app/account/login/styles/login.module.scss";

import LoginLostForm from "@/app/account/login/components/lost/login-lost-form";
import BackgroundPresentationForm from "@/components/presentations/background-presentation-form";


export const metadata: Metadata = {
  title: "Perdeu ou esqueceu a sua senha | ETHOS",
  description: "Recupere a sua senha da conta do site ETHOS.",
};
export default async function LostPage() {
  return (
    <section className={styles.login}>
      {/* Fundo branco translúcido */}

      <div className={`${styles.content} container-login`}>
        {/* Lado esquerdo: Login */}
        <div className={styles.left}>
          <div className={styles.mask}>
            <h1 className="title">Perdeu a Senha</h1>
            <LoginLostForm />
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
