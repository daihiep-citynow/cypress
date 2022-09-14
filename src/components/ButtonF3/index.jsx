// libs
import React, { useContext, useCallback, useEffect } from "react";
// components
import Button from "@/commons/Button";
// context
import { PageContext } from "@/contexts/pageContext";

const ButtonF3 = () => {
  const { page, setPage } = useContext(PageContext);

  const handleClick = useCallback(() => {
    if (page === 1) {
      setPage(3);
    } else {
      setPage(page - 1);
    }
  }, [page, setPage]);

  const handleKeyDown = useCallback(
    (e) => {
      e.preventDefault();
      if (e.keyCode === 114) {
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

  return <Button onClick={handleClick} title="F3" icon="▲" />;
};

export default ButtonF3;
