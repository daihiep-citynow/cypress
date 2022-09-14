// libs
import React, { useState, useContext, useEffect, useCallback } from "react";
// components
import Room from "@/commons/Room";
// data
import { roomData, arrStatus } from "@/mocks";
// context
import { PageContext } from "@/contexts";
// others
import styles from "./HomeContent.module.scss";

const HomeContent = () => {
  const { page } = useContext(PageContext);
  const [data, setData] = useState(
    roomData.slice((page - 1) * 140, page * 140)
  );

  const handleRefresh = useCallback(() => {
    const newData = data.map((room) => {
      const newRoom = { ...room };
      newRoom.status = arrStatus[Math.floor(Math.random() * 4)];
      return newRoom;
    });

    setData(newData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setData(roomData.slice((page - 1) * 140, page * 140));
  }, [page]);

  useEffect(() => {
    window.addEventListener("refresh", handleRefresh);

    return () => {
      window.removeEventListener("refresh", handleRefresh);
    };
  }, [handleRefresh]);

  return (
    <div className={styles["home-content-wrapper"]}>
      {data.map((room) => (
        <Room key={room.id} room={room} />
      ))}
    </div>
  );
};

export default HomeContent;
