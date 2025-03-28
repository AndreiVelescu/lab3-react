import styles from "./Community.module.css";
import { MembershipCard } from "./MembershipCard";

export const Community = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Manage your entire community <br />
        in a single system
      </div>
      <div className={styles.description}>Who is Nextcent suitable for?</div>
      <div className={styles.membershipContainer}>
        <MembershipCard
          icon={"src/assets/Icon.svg"}
          title={"Membership Organisations"}
          description={
            "Our membership management software provides full automation of membership renewals and payments"
          }
        />
        <MembershipCard
          icon={"src/assets/Icon (4).svg"}
          title={"National Associations"}
          description={
            "Our membership management software provides full automation of membership renewals and payments"
          }
        />
        <MembershipCard
          icon={"src/assets/Icon (2).svg"}
          title={`Clubs And Groups`}
          description={
            "Our membership management software provides full automation of membership renewals and payments"
          }
        />
      </div>
    </div>
  );
};
