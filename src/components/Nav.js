import Image from "next/image";
import styles from "./Nav.module.css";

const Nav = () => (
  <nav className={styles.nav}>
    {/* Navigation content */}
    <Image src="/assets/logo.svg" alt="Meet Logo" width={118} height={28} />
  </nav>
);

export default Nav;
