import styles from "./NotFoundPage.module.css";
import { Link } from "../navigation/Link";
export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>Page Not Found</p>
        <Link to="/" className={styles.homeLink}>
          Go back to Home
        </Link>
      </div>
    </div>
  );
};
