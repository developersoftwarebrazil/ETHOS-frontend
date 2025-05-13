import { Metadata } from "next";

import styles from "@/app/account/login/styles/login.module.scss";
import LoginResetForm from "./component/login-reset-form";
import BackgroundPresentationForm from "@/components/presentations/background-presentation-form";

export const metadata: Metadata = {
  title: "Resetar a sua senha | ETHOS",
  description: "Resete a senha da sua conta no site ETHOS.",
};

type Props = {
  searchParams: Promise<{
    key: string;
    login: string;
  }>;
};

export default async function LoginResetPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;

  const key = resolvedParams.key ?? "";
  const login = resolvedParams.login ?? "";

  return (
    <section className={styles.login}>
      <div className={`${styles.content} container-login`}>
        <div className={styles.left}>
          <div className={styles.mask}>
            <h1 className="title">Recuperar Senha</h1>
            <LoginResetForm keyToken={key} login={login} />
          </div>
          <div className={styles.overlay} />
        </div>
        <BackgroundPresentationForm />
        <div className={styles.overlay}></div>
      </div>
    </section>
  );
}
 