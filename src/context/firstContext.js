"use client";

import { createContext, useState } from "react";

export const CreateContext = createContext(null);

export const ContextProvider = ({ children }) => {
  const contextValue = "bright future";
  const [childValue, setChildValue] = useState([]);
  return (
    <CreateContext.Provider value={{ setChildValue, contextValue, childValue }}>
      {children}
    </CreateContext.Provider>
  );
};
