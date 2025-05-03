import styles from "./login-presentation-form.module.scss";

export default async function LoginPresentationForm() {
  return (
    <>
      <section className={styles.right}>
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
          <div className={styles.overlay}></div> {/* Overlay vem por último! */}
        </div>
      </section>
    </>
  );
}
