// libs
import React, { useContext } from "react";
// components
import RoomLabel from "@/commons/RoomLabel";
// hooks
import { LocalesContext } from "@/hooks/useLocales";
// const
import { roomStatusColor } from "@/constants";

const RoomLabelCheckin = () => {
  // eslint-disable-next-line no-unused-vars
  const { languages } = useContext(LocalesContext);

  return (
    <RoomLabel
      roomStatus={languages["home.controller.notYetCheckin"]}
      roomColor={roomStatusColor.NOT_YET_CHECKIN}
    />
  );
};

export default RoomLabelCheckin;
