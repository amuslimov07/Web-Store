import { InputHTMLAttributes, useId } from "react";
import styles from "./MyInput.module.css";
type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  success?: string;
};

export default function MyInput({
  label,
  error,
  success,
  id,
  className,
  ...rest
}: Props) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const descriptionId = `${inputId}-description`;
  const message = error || success;
  return (
    <div className={styles.wrapper}>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        {...rest}
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={message ? descriptionId : undefined}
        className={[
          styles.input,
          error && styles.error,
          !error && success && styles.success,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      />
      {message && (
        <span
          id={descriptionId}
          className={[
            styles.description,
            error && styles.error,
            !error && success && styles.success,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {message}
        </span>
      )}
    </div>
  );
}
