import { SmallCard } from "./smallCard";
import styles from "./smallImageContentBlock.module.css";

export const SmallImageContentBlock = (props) => {
  const { cardOne, cardTwo } = props;

  return (
    <div className={styles.container}>
      <SmallCard
        image={cardOne.image}
        typography={cardOne.typography}
        className={styles.top}
      />
      <SmallCard
        image={cardTwo.image}
        typography={cardTwo.typography}
        className={styles.bottom}
      />
    </div>
  );
};
