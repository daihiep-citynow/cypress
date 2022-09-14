// libs
import React, { useCallback, useContext, useEffect } from "react";
// components
import Button from "@/commons/Button";
// context
import { PageContext } from "@/contexts/pageContext";

const ButtonF1 = () => {
  const { page, setPage } = useContext(PageContext);

  const handleClick = useCallback(() => {
    if (page === 3) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  }, [page, setPage]);

  const handleKeyDown = useCallback(
    (e) => {
      e.preventDefault();
      if (e.keyCode === 112) {
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

  return <Button onClick={handleClick} title="F1" icon="▼" />;
};

export default ButtonF1;
