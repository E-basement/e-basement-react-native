import { useState } from "react";
import { useBreweriesContext } from "../context/BreweriesContext";
import { DEFAULT_CURRENCY } from '../Constants';

const useCheckout = () => {
  const beers = useBreweriesContext().flatMap(({ beers }) => beers);
  const [checkout, setCheckout] = useState({ items: [] });

  const addItem = (itemId, amount = 1) => {
    const newCheckout = getNewCheckout(checkout, itemId, amount, beers);
    setCheckout(newCheckout);
  };
  const getSumPrice = () => ({
    amount: checkout.items.reduce(
      (sum, { price, amount }) => sum + price.amount * amount,
      0
    ),
    currency: checkout.items[0]?.currency || DEFAULT_CURRENCY,
  });
  const buy = () => setCheckout({ items: [] });
  const getCheckout = () => checkout;

  return { getCheckout, addItem, getSumPrice, buy };
};

const getNewCheckout = (checkout, itemId, addAmount, beers) => {
  
  const itemInCheckout =
    checkout.items.find((item) => item.id === itemId) ||
    beers.find((item) => item.id === itemId);

  const newCheckout = {
    items: [
      ...checkout.items.filter((item) => item.id !== itemId),
      {
        ...itemInCheckout,
        amount: (itemInCheckout?.amount || 0) + addAmount || 0,
      },
    ].filter((item) => item.amount > 0),
  };

  return newCheckout;
};

export default useCheckout;
