import React from "react";
import styles from "../../styles/form-body.module.scss";

interface FomrBodyProps {
  title: string;
  children: React.ReactNode;
}

export default function FormBody({ title, children }: FomrBodyProps) {
  return (
    <>
      <section className={styles.formBody}>
      <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>{children}</div>
      </section>
    </>
  );
}
