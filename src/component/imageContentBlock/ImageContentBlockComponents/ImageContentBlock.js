import { ImageBlockTitle } from "./imageBlockTitle";
import styles from "./imageContent.module.css";
import { LargeCard } from "./largeCard";
import { SmallImageContentBlock } from "./smallImageContentBlock";

export const ImageContentBlock = (props) => {
  const message = props?.message;
  const largeImageContentBlockProps = props.largeCard;
  const smallImageContentBlockProps = props.smallCard;

  return (
    <div className={styles.wrapper}>
      {message && <ImageBlockTitle message={message} />}

      <div className={styles.container}>
        <LargeCard
          image={largeImageContentBlockProps.image}
          typography={largeImageContentBlockProps.typography}
        />
        <SmallImageContentBlock
          cardOne={smallImageContentBlockProps.cardOne}
          cardTwo={smallImageContentBlockProps.cardTwo}
        />
      </div>
    </div>
  );
};
