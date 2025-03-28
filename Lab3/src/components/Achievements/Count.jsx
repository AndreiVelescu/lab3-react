import styles from "./Count.module.css";

export const Count = ({ img, count, title }) => {
  return (
    <div className={styles.container}>
      <img src={img} />
      <div className={styles.details}>
        <div className={styles.countNumber}>{count}</div>
        <div className={styles.countName}>{title}</div>
      </div>
    </div>
  );
};
