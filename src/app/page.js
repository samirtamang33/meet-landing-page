import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        {/* Navigation content */}
        <Image
          src="/assets/logo.svg"
          alt="Meet Logo"
          width={118}
          height={28}
          className={styles.logo}
        />
      </nav>

      {/* Hero section content */}
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
        </div>
      </div>

      {/* Main content */}
      <div className={styles.mainContent}>
        <div className={styles.imageGrid}>
          <Image
            src="/assets/desktop/image-woman-in-videocall.jpg"
            alt="Hero Image"
            width={147.5}
            height={144}
          />
          <Image
            src="/assets/desktop/image-woman-in-videocall.jpg"
            alt="Hero Image"
            width={147.5}
            height={144}
          />
          <Image
            src="/assets/desktop/image-woman-in-videocall.jpg"
            alt="Hero Image"
            width={147.5}
            height={144}
          />
          <Image
            src="/assets/desktop/image-woman-in-videocall.jpg"
            alt="Hero Image"
            width={147.5}
            height={144}
          />
        </div>
      </div>
      <footer className={styles.footer}>
        {/* Footer content */}
        <p>© 2025 Meet. All rights reserved.</p>
      </footer>
    </div>
  );
}
