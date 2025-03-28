import styles from "./ImgCard.module.css";

export const ImgCard = ({ img, description }) => {
  return (
    <div className={styles.container}>
      <img className={styles.picture} src={img} alt="" />
      <div className={styles.content}>
        <div className={styles.description}>{description}</div>
        <div className={styles.buttonContainer}>
          <div className={styles.button}>Readmore</div>
          <img src="src/assets/Right.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
