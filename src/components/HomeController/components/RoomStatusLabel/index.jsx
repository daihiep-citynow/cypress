// libs
import React, { useContext } from "react";
// components
import RoomLabel from "@/commons/RoomLabel";
// data
import { roomStatusList } from "@/mocks";
// hooks
import { LocalesContext } from "@/hooks/useLocales";
// others
import styles from "./RoomStatusLabel.module.scss";

const RoomStatusLabel = () => {
  // eslint-disable-next-line no-unused-vars
  const { languages } = useContext(LocalesContext);

  return (
    <div className={styles["room-status-label-wrapper"]}>
      {roomStatusList.map((roomStatus) => (
        <RoomLabel
          key={roomStatus.status}
          roomStatus={roomStatus.status}
          roomColor={roomStatus.color}
        />
      ))}
    </div>
  );
};

export default RoomStatusLabel;
