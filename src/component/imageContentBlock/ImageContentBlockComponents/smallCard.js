import styles from "./smallCard.module.css";

export const SmallCard = ({ image, typography }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt="placeholder" className={styles.image} />
        <p className={styles.p}>{typography}</p>
      </div>
    </div>
  );
};
