import { InputHTMLAttributes } from "react";
import styles from "./Radio.module.css";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
};
export default function Radio({ id, disabled, label, ...props }: Props) {
  return (
    <label className={styles.wrapper} htmlFor={id}>
      <input
        {...props}
        id={id}
        type="radio"
        disabled={disabled}
        className={styles.radio}
      />
      {label && <span>{label}</span>}
    </label>
  );
}
