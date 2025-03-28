import styles from "./Achievements.module.css";
import { Count } from "./Count";

export const Achievements = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <div className={styles.title1}>Helping a local</div>
        <div className={styles.title2}>business reinvent itself</div>
        <div className={styles.description}>
          We reached here with our hard work and dedication
        </div>
      </div>
      <div className={styles.countSection}>
        <div className={styles.row}>
          <Count
            img={"src/assets/ribiata.png"}
            count={"2,245,341"}
            title={"Members"}
          />
          <Count img={"src/assets/ruki.png"} count={"46,328"} title={"Clubs"} />
        </div>
        <div className={styles.row}>
          <Count
            img={"src/assets/palcik.svg"}
            count={"828,867"}
            title={"Event Bookings"}
          />
          <Count
            img={"src/assets/Cosheliok.svg"}
            count={"1,926,436"}
            title={"Payments"}
          />
        </div>
      </div>
    </div>
  );
};
