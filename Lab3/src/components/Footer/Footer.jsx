import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.companyInfo}>
        <div className={styles.logo}>
          <img src="src/assets/LogoIcon.svg" alt="" />
          <img src="src/assets/Nexcent.svg" alt="" />
        </div>
        <div className={styles.textInf}>Copyright © 2020 Nexcent ltd.</div>
        <div className={styles.textInf}>All rights reserved</div>
        <div className={styles.socialLinks}>
          <a href="#">
            <img src="src/assets/Social Icons.svg" alt="Instagram" />
          </a>
          <a href="#">
            <img src="src/assets/Social Icons-1.svg" alt="IDK" />
          </a>
          <a href="#">
            <img src="src/assets/Social Icons-2.svg" alt="Twitter" />
          </a>
          <a href="#">
            <img src="src/assets/Social Icons-3.svg" alt="YouTube" />
          </a>
        </div>
      </div>

      <div className={styles.columnsContainer}>
        <div className={styles.col}>
          <div className={styles.title}>Company</div>
          <div className={styles.link}>About us</div>
          <div className={styles.link}>Blog</div>
          <div className={styles.link}>Contact us</div>
          <div className={styles.link}>Pricing</div>
          <div className={styles.link}>Testimonials</div>
        </div>
        <div className={styles.col}>
          <div className={styles.title}>Support</div>
          <div className={styles.link}>Help center</div>
          <div className={styles.link}>Terms of service</div>
          <div className={styles.link}>Legal</div>
          <div className={styles.link}>Privacy policy</div>
          <div className={styles.link}>Status</div>
        </div>
        <div className={styles.col}>
          <div className={styles.title}>Stay up to date</div>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email"
            />
            <div type="button" className={styles.button}>
              <img src="src/assets/send.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
