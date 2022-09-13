// libs
import React from "react";
// const
import { roomStatusList } from "@/constants";
// others
import styles from "./RoomLabel.module.scss";

const RoomLabel = ({ roomStatus, roomColor }) => (
  <div className={styles["room-label-wrapper"]}>
    <div
      style={{
        backgroundColor: roomColor
      }}
      className={styles["room-color"]}
    />
    <div className={styles["room-status"]}>{roomStatusList[roomStatus]}</div>
  </div>
);

export default RoomLabel;
