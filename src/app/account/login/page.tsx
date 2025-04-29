import LoginForm from "@/components/account/login/login-form";
import styles from "./login.module.scss";

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
        <div className={styles.right}>
          <div className={styles.backgroundImage}></div>
          <div className={styles.presenterImage}></div>
          <div className={styles.presentation}>
            <h2>Ethos</h2>
            <p>cursos integrados</p>
            <h3>Apresenta</h3>
            <div className={styles.cpac}>
              <span>C</span>
              <span>P</span>
              <span>A</span>
              <span>C</span>
            </div>
            <p>CURSO DE PSICANÁLISE E ANÁLISES CLÍNICA</p>
            <div className={styles.blockquote}>
              <blockquote>
                <span>Velhos universos,</span>
                <span>novas dimensões</span>
              </blockquote>
            </div>
          </div>
          <div className={styles.overlay}></div> {/* Overlay vem por último! */}
        </div>
      </div>
    </section>
  );
}
