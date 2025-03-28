import styles from "./Login.module.css";

export const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img
            src={"src/assets/rafiki.svg"}
            alt="Login illustration"
            className={styles.image}
          />
        </div>
        <div className={styles.loginContainer}>
          <h1 className={styles.title}>Login</h1>
          <form className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
            />
            <button className={styles.button}>Login</button>
            <div className={styles.forgotPassword}>
              <a href="#">Forgot your password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
