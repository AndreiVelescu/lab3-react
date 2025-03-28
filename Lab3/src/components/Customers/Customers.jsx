import styles from "./Customers.module.css";
export const Customers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.picture}>
        <img src="src/assets/image 9.png" alt="" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.description}>
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.{" "}
        </div>
        <div className={styles.name}>Tim Smith</div>
        <div className={styles.nameDescription}>
          British Dragon Boat Racing Association
        </div>
        <div className={styles.logosAndButton}>
          <div className={styles.logos}>
            <img src="src/assets/Logo-1.svg" className={styles.logo} />
            <img src="src/assets/Logo-2.svg" className={styles.logo} />
            <img src="src/assets/Logo-3.svg" className={styles.logo} />
            <img src="src/assets/Logo-4.svg" className={styles.logo} />
            <img src="src/assets/Logo-5.svg" className={styles.logo} />
            <img src="src/assets/Logo-6.svg" className={styles.logo} />
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.btn}>Meet all customers</div>
            <div>
              <img className={styles.strelka} src="src/assets/Right.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
