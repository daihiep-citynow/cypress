// libs
import React from "react";
// components
import ButtonGroup from "./components/ButtonGroup";
import PageNumber from "./components/PageNumber";
import RoomStatusLabel from "./components/RoomStatusLabel";
// others
import styles from "./HomeController.module.scss";

const HomeController = () => (
  <div className={styles["home-controller-wrapper"]}>
    <RoomStatusLabel />
    <PageNumber />
    <ButtonGroup />
  </div>
);

export default HomeController;
