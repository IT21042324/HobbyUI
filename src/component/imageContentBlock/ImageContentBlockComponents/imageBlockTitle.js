import styles from "./imageBlockTitle.module.css";

export const ImageBlockTitle = ({ message }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.message}>{message}</h1>
    </div>
  );
};
