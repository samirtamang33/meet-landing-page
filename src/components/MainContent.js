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
  </div>
);

export default MainContent;
