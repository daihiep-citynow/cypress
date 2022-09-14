// libs
import React, { createContext, useMemo } from "react";
// hooks
import useLocalStorage from "@/hooks/useLocalStorage";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [page, setPage] = useLocalStorage("page", 1);

  const value = useMemo(() => ({ page, setPage }), [page, setPage]);

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
