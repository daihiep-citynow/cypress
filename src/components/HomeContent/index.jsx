// libs
import React, { useState } from "react";
// components
import Room from "@/commons/Room";
// data
import { roomData } from "@/mocks";
// others
import styles from "./HomeContent.module.scss";

const HomeContent = () => {
  const [roomList] = useState(roomData.slice(0, 140));

  return (
    <div className={styles["home-content-wrapper"]}>
      {roomList.map((room, index) => (
        <Room key={room.id} index={index} />
      ))}
    </div>
  );
};

export default HomeContent;
