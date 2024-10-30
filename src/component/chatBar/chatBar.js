import { FaHistory } from "react-icons/fa";
import styles from "./chatBar.module.css";
import { IoMdAddCircle } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";

export const ChatBar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconContainer}>
        <FaHistory className={styles.icon} />
        <IoMdAddCircle className={styles.icon} />
      </div>
      <input type="text" placeholder="Message Me" className={styles.textArea} />
      <div className={styles.icon}>
        <FaMicrophone />
      </div>
    </div>
  );
};
