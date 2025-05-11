import React from "react";
import styles from "./form-body.module.scss";

interface FomrBodyProps {
  title: string;
  children: React.ReactNode;
}

export default function FormBody({ title, children }: FomrBodyProps) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <section className={styles.formBody}>
        <div className={styles.content}>{children}</div>
      </section>
    </>
  );
}
