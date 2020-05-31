import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { FONT_FAMILY, FONT_COLOR, TOPBAR_BACKGROUND_COLOR } from "./Constants";
import PriceText from "./PriceText";
import SmallContainer from "./SmallContainer";

const CartBottomBar = ({ totalPrice, onBuy }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 150,
        backgroundColor: TOPBAR_BACKGROUND_COLOR,
        position: "absolute",
        bottom: 0,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          textAlign: "left",
          fontSize: 35,
          fontFamily: FONT_FAMILY,
          color: FONT_COLOR,
          marginBottom: "auto",
          paddingLeft: "5%",
          marginTop: "2%",
        }}
      >
        Total:
      </Text>
      <PriceText
        style={{
          textAlign: "left",
          fontSize: 35,
          fontFamily: FONT_FAMILY,
          color: FONT_COLOR,
          marginBottom: "auto",
          paddingLeft: "5%",
          marginTop: "2%",
        }}
        price={totalPrice}
      />

      <TouchableOpacity
        onPress={onBuy}
        style={{
          height: "20%",
          paddingRight: "5%",
          paddingLeft: "5%",
          width: "30%",
          marginTop: "2%",
          marginBottom: "auto",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: 300,
        }}
      >
        <SmallContainer style={{ height: "100%", width: "100%" }}>
          <Text
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: 20,
              fontFamily: FONT_FAMILY,
              color: FONT_COLOR,
            }}
          >
            Buy
          </Text>
        </SmallContainer>
      </TouchableOpacity>
    </View>
  );
};

export default CartBottomBar;
