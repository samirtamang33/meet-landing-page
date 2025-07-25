import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
