import styles from "./largeCard.module.css";

export const LargeCard = ({ image, typography }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt="placeholder" className={styles.image} />
        <p className={styles.p}>{typography}</p>
      </div>
    </div>
  );
};
