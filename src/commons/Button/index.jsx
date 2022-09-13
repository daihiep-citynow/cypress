// libs
import React from "react";
import classnames from "classnames";
// others
import styles from "./Button.module.scss";

const Button = ({ title, icon, active, onClick = () => {} }) => (
  <div
    className={classnames(
      styles["button-wrapper"],
      active && styles["button-wrapper--active"]
    )}
    onClick={onClick}
  >
    <div className={styles["button-title"]}>{title}</div>
    <div className={styles["button-icon"]}>{icon}</div>
  </div>
);

export default Button;
