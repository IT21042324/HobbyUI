import { imageContentBlockItems } from "../ImageContentBlockerItems";
import { ImageContentBlock } from "./ImageContentBlockComponents/ImageContentBlock";
import styles from "./imageContentBlockMapper.module.css";

export const ImageContentBlockMapper = () => {
  return (
    <div className={styles.wrapper}>
      {imageContentBlockItems.map((item, index) => (
        <ImageContentBlock
          key={index}
          message={item.message}
          largeCard={item.largeCard}
          smallCard={item.smallCard}
        />
      ))}
    </div>
  );
};
