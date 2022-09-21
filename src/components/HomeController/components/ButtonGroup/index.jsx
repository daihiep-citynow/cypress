// libs
import React from "react";
// components
import Button from "@/commons/Button";
// data
import { buttonList } from "@/dataSources";
// others
import styles from "./ButtonGroup.module.scss";

const ButtonGroup = () => (
  <div className={styles["button-group-wrapper"]}>
    {buttonList.map((button) => (
      <Button
        key={button.key}
        test={button.key}
        title={button.key}
        icon={button.icon}
      />
    ))}
  </div>
);

export default ButtonGroup;
