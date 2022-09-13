// libs
import React, { useContext } from "react";
// components
import RoomLabel from "@/commons/RoomLabel";
// hooks
import { LocalesContext } from "@/hooks/useLocales";
// const
import { roomStatusColor } from "@/constants";

const RoomLabelAlready = () => {
  // eslint-disable-next-line no-unused-vars
  const { languages } = useContext(LocalesContext);

  return (
    <RoomLabel
      roomStatus={languages["home.controller.alreadyOut"]}
      roomColor={roomStatusColor.ALREADY_OUT}
    />
  );
};

export default RoomLabelAlready;
