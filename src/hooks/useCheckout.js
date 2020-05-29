import { useState } from "react";
import { useBrewersContext } from "../context/BrewersContext";
import { DEFAULT_CURRENCY } from '../Constants';

const useCheckout = () => {
  const beers = useBrewersContext().flatMap(({ beers }) => beers);
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

  const getCheckout = () => checkout;

  return { getCheckout, addItem, getSumPrice };
};

const getNewCheckout = (checkout, itemId, addAmount, beers) => {
  console.log(beers);
  const itemInCheckout =
    checkout.items.find((item) => item.id === itemId) ||
    beers.find((item) => item.id === itemId);

  const newCheckout = {
    items: [
      ...checkout.items.filter((item) => item.id === itemId),
      {
        ...itemInCheckout,
        amount: (itemInCheckout?.amount || 0) + addAmount,
      },
    ].filter((item) => item.amount > 0),
  };

  return newCheckout;
};

export default useCheckout;
