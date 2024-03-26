'use client'
import React, { createContext, useState,  } from "react";

export const VariablesContext = createContext(null);

export default function VariablesProvider({ children }) {
  // const [ordem, setOrdem] = useState();
  // const [item, setItem] = useState();


  return (
    <VariablesContext.Provider
      // value={{
      //   ordem, setOrdem,
      //   item, setItem
      // }}
    >
      {children}
    </VariablesContext.Provider>
  );
}
