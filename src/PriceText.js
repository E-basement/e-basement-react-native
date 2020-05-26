import React from "react";
import { Text } from "react-native";
import { FONT_COLOR, FONT_FAMILY } from "./Constants";

const PriceText = ({ price }) => {
  const { amount, currency } = price;
  return (
    <Text
      style={{
        textAlign: "center",
        fontSize: 20,
        fontFamily: FONT_FAMILY,
        color: FONT_COLOR,
      }}
    >
      {(amount / 100).toFixed(2) + " " + currency}
    </Text>
  );
};

export default PriceText;
