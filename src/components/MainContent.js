import Image from "next/image";
import styles from "./MainContent.module.css";
import CircleNumber from "./CircleNumber";

const MainContent = () => (
  <div className={styles.mainContent}>
    <CircleNumber number="01" />
    <div className={styles.imageGrid}>
      <Image
        src="/assets/desktop/image-woman-in-videocall.jpg"
        alt="Hero Image"
        width={147.5}
        height={144}
      />
      <Image
        src="/assets/desktop/image-women-videochatting.jpg"
        alt="Hero Image"
        width={147.5}
        height={144}
      />
      <Image
        src="/assets/desktop/image-men-in-meeting.jpg"
        alt="Hero Image"
        width={147.5}
        height={144}
      />
      <Image
        src="/assets/desktop/image-man-texting.jpg"
        alt="Hero Image"
        width={147.5}
        height={144}
      />
    </div>
    <div className={styles.textContent}>
      <div className={styles.title}>
        <h2>Built for modern use</h2>
        <h1>Smarter meetings, all in one place</h1>
      </div>
      <div className={styles.descriptions}>
        <p>
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </div>
  </div>
);

export default MainContent;
