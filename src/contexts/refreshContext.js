// libs
import React, { createContext, useMemo, useState } from "react";

export const RefreshContext = createContext();

export const RefreshProvider = ({ children }) => {
  const [refresh, setRefresh] = useState(Math.random());

  const value = useMemo(() => ({ refresh, setRefresh }), [refresh, setRefresh]);

  return (
    <RefreshContext.Provider value={value}>{children}</RefreshContext.Provider>
  );
};
