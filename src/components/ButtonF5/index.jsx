// libs
import React, { useContext, useEffect, useCallback } from "react";
// components
import Button from "@/commons/Button";
// hooks
import { LocalesContext } from "@/hooks/useLocales";

const ButtonF5 = () => {
  const { languages } = useContext(LocalesContext);

  const handleClick = useCallback(() => {
    const event = new Event("refresh");
    window.dispatchEvent(event);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      e.preventDefault();
      if (e.keyCode === 116) {
        handleClick();
      }
    },
    [handleClick]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Button
      onClick={handleClick}
      title="F5"
      icon={languages["home.controller.refresh"]}
    />
  );
};

export default ButtonF5;
