import styles from "./Unlock.module.css";
import image from "/src/assets/rafiki.svg";

export const Unlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>
          The unseen of spending three years at Pixelgrade
        </div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </div>
        <button className={styles.button}>Learn More</button>
      </div>
    </div>
  );
};
