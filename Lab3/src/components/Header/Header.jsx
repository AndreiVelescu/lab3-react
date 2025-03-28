import styles from "./Header.module.css";

import "./BurgerMenu.module.css";
import BurgerMenu from "./BurgerMenu";
import { Link } from "../navigation/Link";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <a className={styles.link} href="#">
        Home
      </a>
      <a href="#">Service</a>
      <a href="#">Feature</a>
      <a href="#">Product</a>
      <a href="#">Testimonial</a>
    </nav>
  );
};

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <img src="src/assets/Logo.svg" className={styles.logo} alt="Logo" />
      </Link>

      <Nav />

      <div className={styles.buttons}>
        <button className={styles.buttonLogin}>
          <Link className={styles.link} to={"/login"}>
            Login
          </Link>
        </button>
        <button className={styles.buttonSignUp}>
          <Link className={styles.link1} to={"/register"}>
            Sign Up
          </Link>
        </button>
      </div>

      <div className={styles.burgerMenu}>
        <BurgerMenu />
      </div>
    </header>
  );
};
