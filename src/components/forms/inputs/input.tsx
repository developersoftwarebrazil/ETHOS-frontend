import React from "react";
import styles from "../../styles/input.module.scss";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  error?: string;
};
export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div>
      <label className={styles.label} htmlFor={props.name}>
        {label}
      </label>
      <input className={styles.input} id={props.name} {...props} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
