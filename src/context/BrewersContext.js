import React, { useContext, createContext } from "react";
import { BREWERS } from "../Constants";

const BrewersContext = createContext({});

const useBrewersContext = () => useContext(BrewersContext);

const BrewersContextProvider = ({ children }) => (
  <BrewersContext.Provider value={BREWERS}>{children}</BrewersContext.Provider>
);

export { BrewersContext, useBrewersContext, BrewersContextProvider };
