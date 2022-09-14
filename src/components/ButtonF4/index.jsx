// libs
import React, { useCallback, useContext, useEffect, useMemo } from "react";
// components
import Button from "@/commons/Button";
// hooks
import { LocalesContext } from "@/hooks/useLocales";
// context
import { CheckoutContext } from "@/contexts";

const ButtonF4 = () => {
  const { languages } = useContext(LocalesContext);
  const { checkout, setCheckout } = useContext(CheckoutContext);

  const checkoutStatus = useMemo(() => {
    if (checkout === 1) return languages["home.controller.checkout"];
    return languages["home.controller.checkoutHide"];
  }, [checkout, languages]);

  const handleClick = useCallback(() => {
    if (checkout === 1) {
      setCheckout(0);
    } else {
      setCheckout(1);
    }
  }, [checkout, setCheckout]);

  const handleKeyDown = useCallback(
    (e) => {
      e.preventDefault();
      if (e.keyCode === 115) {
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
      title="F4"
      icon={checkoutStatus}
      active={checkout === 1}
    />
  );
};

export default ButtonF4;
