import React from "react";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-material-ui";
import { useNavigation } from "@react-navigation/native";

import { useCheckoutContext } from "./context/CheckoutContext";
import SimpleContainer from "./SimpleContainer";
import { BACKGROUND_COLOR, FONT_FAMILY, FONT_COLOR } from "./Constants";
import PriceText from "./PriceText";

import CartBottomBar from "./CartBottomBar";

const Cart = () => {
  const { getCheckout, getSumPrice, addItem, buy } = useCheckoutContext();
  const items = getCheckout().items;
  const navigation = useNavigation();

  if (!!items && !items.length) return <_EmptyCartText />;

  return (
    <View style={{ backgroundColor: BACKGROUND_COLOR, minHeight: "100%" }}>
      <ScrollView
        style={{
          backgroundColor: BACKGROUND_COLOR,
          paddingTop: 10,
          paddingBottom: 100,
          marginBottom: 150,
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
            onBeerClick={()=>navigation.navigate("Beer", { beerId: id })}
          />
        ))}
      </ScrollView>
      <CartBottomBar totalPrice={getSumPrice()} onBuy={buy} />
    </View>
  );
};

const _Beer = ({ id, url, price, name, amount, onRemoveClick, onBeerClick }) => {
  return (
    <SimpleContainer
      style={{
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 0,
        minWidth: 250,
        marginLeft: "auto",
        marginRight: "auto",
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
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 8,
          marginBottom: 8,
        }}
        onPress={onBeerClick}
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
            fontSize: 14,
            fontFamily: FONT_FAMILY,
            color: FONT_COLOR,
            marginTop: 5,
            maxWidth:100
          }}
        >
          {name}
        </Text>
      </TouchableOpacity>
      <PriceText
        price={price}
        style={{ marginTop: "auto", marginBottom: "auto", fontSize: 14 }}
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: 14,
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
          fontSize: 14,
          marginRight: "2%",
        }}
      />
    </SimpleContainer>
  );
};

const _EmptyCartText = () => (
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
      The Cart is empty
    </Text>
  </View>
);
export default Cart;
