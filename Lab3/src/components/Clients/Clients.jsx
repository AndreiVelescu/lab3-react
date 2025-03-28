import styles from "./Clients.module.css";

export const Clients = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Our Clients</div>
      <div className={styles.underTitle}>
        We have been working with some Fortune 500+ clients
      </div>
      <div className={styles.clientsLogo}>
        <img src="src/assets/Logo-1.svg" className={styles.logo} />
        <img src="src/assets/Logo-2.svg" className={styles.logo} />
        <img src="src/assets/Logo-3.svg" className={styles.logo} />
        <img src="src/assets/Logo-4.svg" className={styles.logo} />
        <img src="src/assets/Logo-5.svg" className={styles.logo} />
        <img src="src/assets/Logo-6.svg" className={styles.logo} />
        <img src="src/assets/Logo copy.svg" className={styles.logo} />
      </div>
    </div>
  );
};
