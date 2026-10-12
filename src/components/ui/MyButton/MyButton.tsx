import { ButtonHTMLAttributes } from "react";
import styles from "./MyButton.module.css";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  active?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

export default function MyButton({
  children,
  active = false,
  disabled = false,
  loading = false,
  ...props
}: Props) {
  return (
    <button
      {...props}
      disabled={disabled}
      aria-pressed={active}
      className={styles.button}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
