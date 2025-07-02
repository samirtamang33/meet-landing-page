import CircleNumber from "./CircleNumber";
import styles from "./Footer.module.css";
import Button from "./Button";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerHero}>
      <CircleNumber number="02" className={styles.CircleNumber} />
      <div className={styles.footerContent}>
        <h1>Experience more together</h1>
        <p>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>

        <div className={styles.footerButton}>
          <Button variant="secondary" className={styles.footerBtn}>
            Download <span>v1.3</span>
          </Button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
