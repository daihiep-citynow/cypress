// libs
import React from "react";
// data
import { roomData } from "@/mocks";
// const
import { roomStatusColor } from "@/constants";
// others
import styles from "./Room.module.scss";

const Room = ({ index }) => {
  const room = roomData[index];

  return (
    <div
      style={{
        backgroundColor: roomStatusColor[room.status]
      }}
      className={styles["room-wrapper"]}
    >
      <div className={styles["room-number"]}>{room.roomNo}</div>
      <div className={styles["room-type"]}>{room.roomType}</div>
      <div className={styles["room-person"]}>{room.night}</div>
      <div className={styles["room-owner"]}>{room.personName}</div>
    </div>
  );
};

export default Room;
