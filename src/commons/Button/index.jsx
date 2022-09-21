// libs
import React, { useCallback, useContext, useEffect, useMemo } from "react";
import classnames from "classnames";
// context
import { PageContext, CheckoutContext, RefreshContext } from "@/contexts";
// hooks
import { LocalesContext } from "@/hooks/useLocales";
// others
import styles from "./Button.module.scss";

const Button = ({ title, icon, test }) => {
  const { languages, local, setLocal } = useContext(LocalesContext);
  const { page, setPage } = useContext(PageContext);
  const { checkout, setCheckout } = useContext(CheckoutContext);
  const { setRefresh } = useContext(RefreshContext);

  const checkoutStatus = useMemo(() => {
    if (title === "F4" && checkout === 1) return languages.CHECKOUT;
    return languages.CHECKOUT_HIDE;
  }, [checkout, languages, title]);

  const handleF1 = useCallback(() => {
    if (page === 3) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  }, [page, setPage]);

  const handleF3 = useCallback(() => {
    if (page === 1) {
      setPage(3);
    } else {
      setPage(page - 1);
    }
  }, [page, setPage]);

  const handleF4 = useCallback(() => {
    if (checkout === 1) {
      setCheckout(0);
    } else {
      setCheckout(1);
    }
  }, [checkout, setCheckout]);

  const handleF5 = useCallback(() => {
    setRefresh((prev) => prev + 1);
  }, [setRefresh]);

  const handleF12 = useCallback(() => {
    if (local === "en") {
      setLocal("vi");
    } else {
      setLocal("en");
    }
  }, [local, setLocal]);

  const handleClick = useCallback(
    (key) => {
      if (key === "F1") {
        handleF1();
      } else if (key === "F3") {
        handleF3();
      } else if (key === "F4") {
        handleF4();
      } else if (key === "F5") {
        handleF5();
      } else if (key === "F12") {
        handleF12();
      }
    },
    [handleF1, handleF3, handleF4, handleF5, handleF12]
  );

  const handleKeyDown = useCallback(
    (e) => {
      e.preventDefault();
      if (e.keyCode === 112) {
        handleF1();
      } else if (e.keyCode === 114) {
        handleF3();
      } else if (e.keyCode === 115) {
        handleF4();
      } else if (e.keyCode === 116) {
        handleF5();
      } else if (e.keyCode === 123) {
        handleF12();
      }
    },
    [handleF1, handleF3, handleF4, handleF5, handleF12]
  );

  const renderIcon = useCallback(() => {
    if (title === "F4") return checkoutStatus;
    if (title === "F5") return languages.REFRESH;
    if (title === "F12") return local === "en" ? "VN" : "EN";
    return icon;
  }, [checkoutStatus, icon, languages, local, title]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className={classnames(
        styles["button-wrapper"],
        title === "F4" && checkout === 1 && styles["button-wrapper--active"]
      )}
      onClick={() => handleClick(title)}
      data-test-id={test}
    >
      <div className={styles["button-title"]}>{title}</div>
      <div className={styles["button-icon"]}>{renderIcon()}</div>
    </div>
  );
};
export default Button;
