import styles from "./Community.module.css";
import { ImgCard } from "./ImgCard";

export const CommunityUpd = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.title}>Caring is the new marketing</div>
        <div className={styles.description}>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </div>
      </div>
      <div className={styles.imgContainer}>
        <ImgCard
          img={"src/assets/Image 18.png"}
          description={
            "Creating Streamlined Safeguarding Processes with OneRen"
          }
        />
        <ImgCard
          img={"src/assets/Image 19.png"}
          description={
            "What are your safeguarding responsibilities and how can you manage them?"
          }
        />
        <ImgCard
          img={"src/assets/Image 20.png"}
          description={
            "Revamping the Membership Model with Triathlon Australia"
          }
        />
      </div>
    </div>
  );
};
