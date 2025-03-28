import styles from "./Register.module.css";
import { Link } from "../navigation/Link";
export const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img
            src={"src/assets/pana.svg"}
            alt="Registration illustration"
            className={styles.image}
          />
        </div>
        <div className={styles.registerContainer}>
          <h1 className={styles.title}>Register</h1>
          <form className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Full Name"
              required
            />
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              required
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              required
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Confirm Password"
              required
            />
            <button className={styles.button}>Register</button>
          </form>
          <div className={styles.loginRedirect}>
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
