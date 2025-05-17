import React from "react";
import styles from "../../styles/form-body.module.scss";

interface FormBodyProps {
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  children: React.ReactNode;
}

export default function FormBody({
  title,
  subtitle,
  buttonLabel,
  onButtonClick,
  children,
}: FormBodyProps) {
  return (
    <section className={styles.formBody}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {buttonLabel && (
          <button className={styles.topButton} onClick={onButtonClick}>
            {buttonLabel}
          </button>
        )}
      </div>
      {subtitle && <p>{subtitle}</p>}
      <div className={styles.content}>{children}</div>
    </section>
  );
}
