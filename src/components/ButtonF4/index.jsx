// libs
import React, { useContext } from "react";
// components
import Button from "@/commons/Button";
// hooks
import { LocalesContext } from "@/hooks/useLocales";

const ButtonF4 = () => {
  const { languages } = useContext(LocalesContext);

  return (
    <Button title="F4" icon={languages["home.controller.checkout"]} active />
  );
};

export default ButtonF4;
