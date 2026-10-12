import { ButtonHTMLAttributes } from "react";
import { Icon, type IconName } from "../Icon/Icon";
import styles from "./IconButton.module.css";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: IconName;
  label: string;
};

export default function IconButton({
  icon,
  label,
  className,
  type = "button",
  ...props
}: Props) {
  return (
    <button
      aria-label={label}
      type={type}
      className={`${styles.button} ${className ?? ""}`}
      {...props}
    >
      <Icon size={16} name={icon} />
    </button>
  );
}
