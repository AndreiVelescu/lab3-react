import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.heroText1}>Lessons and insights</div>
        <div className={styles.heroText2}>from 8 years</div>
        <div className={styles.heroText3}>
          Where to grow your business as a photographer: site or social media?
        </div>
        <div>
          <button className={styles.btn}>Register</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="src/assets/Illustration.svg" alt="HeroImage" />
      </div>
      <div className={styles.dots}>
        <img src="src/assets/Ellipse 5.svg" alt="Dot" />
        <img src="src/assets/Ellipse 6.svg" alt="Dot" />
        <img src="src/assets/Ellipse 6.svg" alt="Dot" />
      </div>
    </div>
  );
};

export default HeroSection;
