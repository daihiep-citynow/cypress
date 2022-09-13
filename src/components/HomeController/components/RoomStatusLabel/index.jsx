// libs
import React from "react";
// components
import RoomLabelVacant from "@/components/RoomLabelVacant";
import RoomLabelCheckin from "@/components/RoomLabelCheckin";
import RoomLabelAlready from "@/components/RoomLabelSAlready";
import RoomLabelStaying from "@/components/RoomLabelStaying";
// others
import styles from "./RoomStatusLabel.module.scss";

const RoomStatusLabel = () => (
  <div className={styles["room-status-label-wrapper"]}>
    <RoomLabelVacant />
    <RoomLabelCheckin />
    <RoomLabelAlready />
    <RoomLabelStaying />
  </div>
);

export default RoomStatusLabel;
