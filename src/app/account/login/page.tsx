import LoginForm from "@/components/account/login/login-form";
import styles from "./login.module.scss";

export default async function LoginPage() {
  return (
    <section className={styles.login}>
      {/* Fundo branco translúcido */}
      <div className={styles.overlay} />

      <div className={styles.content}>
        {/* Lado esquerdo: Login */}
        <div className={styles.left}>
          <div className={styles.mask}>
            <h1 className="title">Login</h1>
            <LoginForm />
          </div>
        </div>

        {/* Lado direito: Apresentação */}
        <div className={styles.right}>
          
        <div className={styles.presenterImage}></div>
          <div className={styles.presentation}>
            <h2>ETHOS</h2>
            <p>CURSOS INTEGRADOS</p>
            <h3>APRESENTA</h3>
            <div className={styles.cpac}>
              <span>C</span>
              <span>P</span>
              <span>A</span>
              <span>C</span>
            </div>
            <p>CURSO DE PSICANÁLISE E ANÁLISES CLÍNICA</p>
            <blockquote>"Velhos universos, novas dimensões"</blockquote>
          
          </div>
        </div>
      </div>
    </section>
  );
}
