import styles from "./MembershipCard.module.css";

export const MembershipCard = ({ icon, title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.member}>
        <img className={styles.icon} src={icon} />
        <div className={styles.title}>{title}</div>
      </div>

      <div className={styles.description}>{description}</div>
    </div>
  );
};
