import React from "react";
import { Icon } from "react-native-material-ui";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PriceText from "./PriceText";
import SmallContainer from "./SmallContainer";
import { FONT_COLOR, FONT_FAMILY, TOPBAR_BACKGROUND_COLOR } from "./Constants";
import { useCheckoutContext } from "./context/CheckoutContext";

const HeaderRight = () => {
  const { getSumPrice } = useCheckoutContext();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Cart")}
      style={{ height: "100%", display: "flex", flexDirection: "row" }}
    >
      <SmallContainer
        style={{
          height: 25,
          margin: 5,
          marginTop: "auto",
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        <PriceText price={getSumPrice()} />
      </SmallContainer>

      <Icon
        name="shopping-basket"
        style={{
          fontSize: 40,
          marginBottom: "auto",
          marginTop: "auto",
          marginRight: 15,
          marginLeft: 5,
        }}
      />
    </TouchableOpacity>
  );
};

const HeaderLeft = (props) => {

  return (
    <View>
      {props.onPress && (
        <TouchableOpacity
          onPress={() => props.onPress()}
          style={{ margin: "auto" }}
        >
          <Icon name="arrow-back" style={{ fontSize: 36, marginLeft: 10 }} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const topBarOptions = {
  headerStyle: {
    backgroundColor: TOPBAR_BACKGROUND_COLOR,
  },
  headerTitleStyle: {
    backgroundColor: TOPBAR_BACKGROUND_COLOR,
    fontFamily: FONT_FAMILY,
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 36,
    color: FONT_COLOR,
  },
  headerRight: (props) => <HeaderRight {...props} />,
  headerLeft: (props) => <HeaderLeft {...props} />,
};

export default topBarOptions;
