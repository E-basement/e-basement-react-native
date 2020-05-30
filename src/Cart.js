import React from "react";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-material-ui";

import { useCheckoutContext } from "./context/CheckoutContext";
import SimpleContainer from "./SimpleContainer";
import {
  BACKGROUND_COLOR,
  FONT_FAMILY,
  FONT_COLOR,
  TOPBAR_BACKGROUND_COLOR,
} from "./Constants";
import PriceText from "./PriceText";
import SmallContainer from "./SmallContainer";

const Cart = () => {
  const { getCheckout, getSumPrice, addItem, buy } = useCheckoutContext();
  const items = getCheckout().items;
  if (!!items && !items.length) return <_EmptyCardText />;

  return (
    <View style={{ backgroundColor: BACKGROUND_COLOR, minHeight: "100%" }}>
      <ScrollView
        style={{
          backgroundColor: BACKGROUND_COLOR,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {items.map(({ id, url, price, name, amount }) => (
          <_Beer
            key={id}
            id={id}
            url={url}
            price={price}
            name={name}
            amount={amount}
            onRemoveClick={() => addItem(id, -1)}
          />
        ))}
      </ScrollView>
      <_BottomBar totalPrice={getSumPrice()} onBuy={buy} />
    </View>
  );
};

const _BottomBar = ({ totalPrice, onBuy }) => {
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
const _Beer = ({ id, url, price, name, amount, onRemoveClick }) => {
  return (
    <SimpleContainer
      style={{
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 0,
        minWidth: 250,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: 5,
        marginBottom: 5,
      }}
    >
      <View
        style={{
          borderRightWidth: 1,
          borderColor: "#707070",
          borderStyle: "solid",
          padding: 5,
        }}
      >
        <TouchableOpacity
          onPress={onRemoveClick}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "auto",
            marginTop: "auto",
            paddingRight: 7,
          }}
        >
          <Icon
            name="remove-circle-outline"
            style={{
              fontSize: 36,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "auto",
              marginTop: "auto",
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 8,
          marginBottom: 8,
        }}
      >
        <Image
          source={{ uri: url }}
          style={{
            height: 68,
            width: 16,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontFamily: FONT_FAMILY,
            color: FONT_COLOR,
            marginTop: 5,
          }}
        >
          {name}
        </Text>
      </View>
      <PriceText
        price={price}
        style={{ marginTop: "auto", marginBottom: "auto", fontSize: 20 }}
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontFamily: FONT_FAMILY,
          color: FONT_COLOR,
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        {amount}
      </Text>
      <PriceText
        price={{ currency: price.currency, amount: price.amount * amount }}
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          fontSize: 20,
          marginRight: "10%",
        }}
      />
    </SimpleContainer>
  );
};

const _EmptyCardText = () => (
  <View style={{ backgroundColor: BACKGROUND_COLOR, height: "100%" }}>
    <Text
      style={{
        color: FONT_COLOR,
        fontFamily: FONT_FAMILY,
        fontSize: 30,
        textAlign: "center",
        marginTop: "auto",
        marginBottom: "auto",
      }}
    >
      The Card is empty
    </Text>
  </View>
);
export default Cart;
