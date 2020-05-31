import React, { useContext, createContext } from "react";
import { BREWERIES } from "../Constants";

const BreweriesContext = createContext({});

const useBreweriesContext = () => useContext(BreweriesContext);

const BreweriesContextProvider = ({ children }) => (
  <BreweriesContext.Provider value={BREWERIES}>{children}</BreweriesContext.Provider>
);

export { BreweriesContext, useBreweriesContext, BreweriesContextProvider };
