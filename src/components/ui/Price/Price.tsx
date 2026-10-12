import styles from "./Price.module.css";
type Props = {
  price: number;
  currency?: string;
  oldPrice?: number;
};

export default function Price({ price, oldPrice, currency = "$" }: Props) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.price}>
        {currency}
        {price}
      </span>
      {oldPrice !== undefined && (
        <s className={styles.oldPrice}>
          {currency}
          {oldPrice}
        </s>
      )}
    </div>
  );
}
