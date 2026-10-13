import styles from "./Badge.module.css";

type Props = {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success";
};

export default function Badge({ children, variant = "default" }: Props) {
  return (
    <div className={`${styles.wrapper} ${styles[variant]}`}>
      <span className={styles.badge}>{children}</span>
    </div>
  );
}
