// libs
import React, { useState, useContext, useEffect, useCallback } from "react";
// components
import Room from "@/commons/Room";
// data
import { roomData, arrStatus } from "@/mocks";
// context
import { PageContext, RefreshContext } from "@/contexts";
// others
import styles from "./HomeContent.module.scss";

const HomeContent = () => {
  const [count, setCount] = useState(0);
  const { page } = useContext(PageContext);
  const { refresh } = useContext(RefreshContext);

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
    if (count === 0) {
      setCount(1);
      return;
    }

    handleRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  useEffect(() => {
    if (count === 0) {
      setCount(1);
      return;
    }

    setData(roomData.slice((page - 1) * 140, page * 140));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div data-test-id="home-content" className={styles["home-content-wrapper"]}>
      {data.map((room) => (
        <Room key={room.id} room={room} />
      ))}
    </div>
  );
};

export default HomeContent;
