// libs
import React from "react";
// components
import ButtonF1 from "@/components/ButtonF1";
import ButtonF3 from "@/components/ButtonF3";
import ButtonF4 from "@/components/ButtonF4";
import ButtonF5 from "@/components/ButtonF5";
import ButtonF12 from "@/components/ButtonF12";
// others
import styles from "./ButtonGroup.module.scss";

const ButtonGroup = () => (
  <div className={styles["button-group-wrapper"]}>
    <ButtonF1 />
    <ButtonF3 />
    <ButtonF4 />
    <ButtonF5 />
    <ButtonF12 />
  </div>
);

export default ButtonGroup;
