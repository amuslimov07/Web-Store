import { InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
};

export default function Checkbox({ id, disabled, label, ...props }: Props) {
  return (
    <label className={styles.wrapper} htmlFor={id}>
      <input
        {...props}
        disabled={disabled}
        id={id}
        type="checkbox"
        className={styles.checkbox}
      />
      {label && <span>{label}</span>}
    </label>
  );
}
