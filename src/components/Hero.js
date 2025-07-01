import Image from "next/image";
import styles from "./Hero.module.css";
import Button from "./Button";

const Hero = () => (
  <div className={styles.hero}>
    <Image
      src="/assets/tablet/image-hero.png"
      alt="Hero Image"
      width={443}
      height={160}
      className={styles.heroImage}
    />
    <div className={styles.heroText}>
      <div className={styles.heroTitle}>Group Chat for Everyone</div>
      <div className={styles.heroSubtitle}>
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </div>
      <div className={styles.heroButton}>
        <Button>
          Download <span>v1.3</span>
        </Button>
        <Button variant="secondary">What is it?</Button>
      </div>
    </div>
  </div>
);

export default Hero;
