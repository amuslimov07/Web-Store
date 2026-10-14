import styles from "./Rating.module.css";

type Props = {
  rating: number;
};

export default function Rating({ rating }: Props) {
  const normalizedRating = Math.min(5, Math.max(0, rating));
  const fillWidth = `${(normalizedRating / 5) * 100}%`;

  return (
    <div
      className={styles.wrapper}
      role="img"
      aria-label={`Рейтинг: ${normalizedRating} из 5`}
    >
      <div className={styles.starsBackground}>★★★★★</div>

      <div
        className={styles.starsFill}
        style={{ width: fillWidth }}
        aria-hidden="true"
      >
        ★★★★★
      </div>
    </div>
  );
}
