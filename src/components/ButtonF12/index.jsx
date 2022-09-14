// libs
import React, { useCallback, useContext, useEffect } from "react";
// hooks
import { LocalesContext } from "@/hooks/useLocales";
// components
import Button from "@/commons/Button";

const ButtonF12 = () => {
  const { local, setLocal } = useContext(LocalesContext);

  const handleF12 = useCallback(() => {
    if (local === "en") {
      setLocal("vi");
    } else {
      setLocal("en");
    }
  }, [setLocal, local]);

  const handleKeyDown = useCallback(
    (e) => {
      e.preventDefault();
      if (e.keyCode === 123) {
        handleF12();
      }
    },
    [handleF12]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Button
      onClick={handleF12}
      title="F12"
      icon={local === "vi" ? "EN" : "VI"}
    />
  );
};

export default ButtonF12;
