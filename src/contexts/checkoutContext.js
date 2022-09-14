// libs
import React, { createContext, useMemo } from "react";
// hooks
import useLocalStorage from "@/hooks/useLocalStorage";

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  // 0 is hide, 1 is show
  const [checkout, setCheckout] = useLocalStorage("checkout", 1);

  const value = useMemo(
    () => ({ checkout, setCheckout }),
    [checkout, setCheckout]
  );

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};
