import styles from "../../styles/checkboxe.module.scss";

interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export default function Checkbox({
  id,
  label,
  checked,
  onChange,
  disabled = false,
}: CheckboxProps) {
  return (
    <label htmlFor={id} className={styles.checkboxWrapper}>
      <input
        id={id}
        type="checkbox"
        name={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.checkboxInput}
      />
      <span className={styles.checkboxLabel}>{label}</span>
    </label>
  );
}
