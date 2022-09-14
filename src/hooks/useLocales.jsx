// libs
import React, { createContext, useMemo } from "react";
// hooks
import useLocalStorage from "./useLocalStorage";
// others
import locales from "../locales";

export const LocalesContext = createContext();

export const LocalesProvider = ({ children }) => {
  const [local, setLocal] = useLocalStorage("lang", "en");

  const value = useMemo(
    () => ({ languages: locales[local], setLocal, local }),
    [local, setLocal]
  );

  return (
    <LocalesContext.Provider value={value}>{children}</LocalesContext.Provider>
  );
};

const localesList = Object.keys(locales);

export default {
  LocalesContext,
  LocalesProvider,
  localesList
};
