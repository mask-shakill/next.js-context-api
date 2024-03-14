"use client";

import { createContext } from "react";

export const CreateContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const contextValue = "bright future";
  return (
    <CreateContext.Provider value={contextValue}>
      {children}
    </CreateContext.Provider>
  );
};
