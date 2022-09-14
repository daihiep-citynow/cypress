// libs
import React, { useContext } from "react";
// const
import { roomStatusColor } from "@/constants";
// context
import { CheckoutContext } from "@/contexts";
// others
import styles from "./Room.module.scss";

const Room = ({ room }) => {
  const { checkout } = useContext(CheckoutContext);

  return (
    <div
      style={{
        visibility:
          checkout === 1 && room.status === "ALREADY_OUT" ? "hidden" : null,
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
