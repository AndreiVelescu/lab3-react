import styles from "./Calender.module.css";
export const Calender = () => {
  return (
    <div className={styles.container}>
      <div className={styles.picture}>
        <img src="src/assets/pana.svg" alt="" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>
          How to design your site footer like we did
        </div>
        <div className={styles.description}>
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </div>
        <button className={styles.button}>Learn More</button>
      </div>
    </div>
  );
};
