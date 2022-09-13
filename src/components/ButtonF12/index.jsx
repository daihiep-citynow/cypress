// libs
import React, { useContext } from "react";
// hooks
import { LocalesContext } from "@/hooks/useLocales";
// components
import Button from "@/commons/Button";

const ButtonF12 = () => {
  const { setLocal } = useContext(LocalesContext);

  const handleF12 = () => {
    setLocal("vi");
  };
  return <Button onClick={() => handleF12()} title="F12" icon="VI" />;
};

export default ButtonF12;
