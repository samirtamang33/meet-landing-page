import React from "react";
import styles from "./CircleNumber.module.css";

const CircleNumber = ({ number }) => {
  return (
    <div className={styles.circleContainer}>
      <div className={styles.circleLine}></div>
      <div className={styles.circle}>
        <span className={styles.number}>{number}</span>
      </div>
    </div>
  );
};

export default CircleNumber;
