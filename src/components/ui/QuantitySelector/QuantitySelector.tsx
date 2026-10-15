import styles from "./QuantitySelector.module.css";

type Props = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
};

export default function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 100,
  disabled = false,
}: Props) {
  function decrement() {
    if (value > min) {
      onChange(value - 1);
    }
  }

  function increment() {
    if (value < max) {
      onChange(value + 1);
    }
  }

  return (
    <div className={`${styles.wrapper} ${disabled ? styles.disabled : ""}`}>
      <button
        type="button"
        onClick={decrement}
        className={styles.selectorButton}
        disabled={disabled || value <= min}
        aria-label="Decrease quantity"
      >
        −
      </button>

      <span>{value}</span>

      <button
        type="button"
        onClick={increment}
        className={styles.selectorButton}
        disabled={disabled || value >= max}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
