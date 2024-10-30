import styles from "./welcome.module.css";

export const WelcomeMessage = ({ message }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.message}>{message}</h1>
    </div>
  );
};
