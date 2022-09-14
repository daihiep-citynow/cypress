// libs
import React, { useContext } from "react";
// components
import RoomLabel from "@/commons/RoomLabel";
// hooks
import { LocalesContext } from "@/hooks/useLocales";
// data
import { roomStatusList } from "@/mocks";
// others
import styles from "./RoomStatusLabel.module.scss";

const RoomStatusLabel = () => {
  const { languages } = useContext(LocalesContext);

  return (
    <div className={styles["room-status-label-wrapper"]}>
      {roomStatusList.map(({ status, color }) => (
        <RoomLabel
          key={status}
          roomStatus={languages[status]}
          roomColor={color}
        />
      ))}
    </div>
  );
};

export default RoomStatusLabel;
