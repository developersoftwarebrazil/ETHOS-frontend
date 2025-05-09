import { Metadata } from "next";

import styles from "@/app/account/login/login.module.scss";
import LoginResetForm from "@/components/account/login/reset/login-reset-form";
import LoginPresentationForm from "@/components/account/login/presentations/login-presentation-form";

export const metadata: Metadata = {
  title: "Resetar a sua senha | ETHOS",
  description: "Reset a senha da sua conta do site ETHOS.",
};
type SearchParamsReset = {
  searchParams: Promise<{
    key: string;
    login: string;
  }>;
};

export default async function ResetPage(props: SearchParamsReset) {
  const searchParams = await props.searchParams;
  console.log(searchParams);
  return (
    <section className={styles.login}>
      {/* Fundo branco translúcido */}

      <div className={`${styles.content} container-login`}>
        {/* Lado esquerdo: Login */}
        <div className={styles.left}>
          <div className={styles.mask}>
            <h1 className="title">Recuperar Senha</h1>
            <LoginResetForm
              keyToken={searchParams.key}
              login={searchParams.login}
            />
          </div>
          <div className={styles.overlay} />
        </div>
        {/* Lado direito: Apresentação */}
        <LoginPresentationForm />
        <div className={styles.overlay}></div> {/* Overlay vem por último! */}
      </div>
    </section>
  );
}
