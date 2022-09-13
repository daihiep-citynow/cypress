// libs
import React, { useContext } from "react";
// components
import Button from "@/commons/Button";
// hooks
import { LocalesContext } from "@/hooks/useLocales";

const ButtonF5 = () => {
  const { languages } = useContext(LocalesContext);

  return <Button title="F5" icon={languages["home.controller.refresh"]} />;
};

export default ButtonF5;
