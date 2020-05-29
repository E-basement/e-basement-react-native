import React, { useContext, createContext } from "react";
import useCheckout from '../hooks/useCheckout';


const CheckoutContext = createContext({});

const useCheckoutContext = () => useContext(CheckoutContext);

const CheckoutContextProvider = ({ children }) => {
  const checkout = useCheckout();
  return (
    <CheckoutContext.Provider value={checkout}>{children}</CheckoutContext.Provider>
  );
}


export { CheckoutContext, useCheckoutContext, CheckoutContextProvider };

