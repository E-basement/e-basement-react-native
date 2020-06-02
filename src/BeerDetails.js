import React, {useState} from "react";
import { Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Icon } from "react-native-material-ui";

import { useBreweriesContext } from "./context/BreweriesContext";
import { BACKGROUND_COLOR, FONT_COLOR, FONT_FAMILY } from "./Constants";
import SimpleContainer from "./SimpleContainer";
import PriceText from "./PriceText";
import SmallContainer from "./SmallContainer";
import { useCheckoutContext } from "./context/CheckoutContext";

const BeerDetails = ({ route }) => {
  const { beerId } = route.params;
  const breweries = useBreweriesContext();
  const beer = breweries
    .flatMap(({ beers }) => beers)
    .find(({ id }) => id === beerId);
  const { addItem } = useCheckoutContext();
  const [imgSize, setImgSize] = useState({ height: 362, width: 95 });
  Image.getSize(beer.url, (width, height) => setImgSize({
    width,
    height,
  }));
  return (
    <ScrollView style={{ backgroundColor: BACKGROUND_COLOR, height: "100%" }}>
      <SimpleContainer
        style={{
          width: 170,
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          paddingBottom: 0,
          paddingTop: 5,
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 10,
          paddingRight: 10,
          minHeight: 100,
          maxWidth: 1000,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 40,
            fontFamily: FONT_FAMILY,
            color: FONT_COLOR,
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          {beer.name}
        </Text>
      </SimpleContainer>
      <SimpleContainer
        style={{
          width: 170,
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          paddingBottom: 0,
          paddingTop: 5,
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 10,
          paddingRight: 10,
          marginBottom: 15,
          maxWidth: 1000,
        }}
      >
        <Image
          source={{ uri: beer.url }}
          style={{
            height: imgSize.height,
            width: imgSize.width,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <_BeerInfoText
          style={{ marginTop: 5, fontSize: 24 }}
          text={beer.description}
        />
        {beer.ingredients && (
          <_BeerInfoText
            style={{ marginTop: 15 }}
            text={beer.ingredients}
            pred={"Ingredients: "}
          />
        )}
        <PriceText style={{ fontSize: 28, marginTop: 10 }} price={beer.price} />
        <_AddToCartButton onAddToCart={() => addItem(beer.id)} />
      </SimpleContainer>
    </ScrollView>
  );
};

const _AddToCartButton = ({ onAddToCart }) => {
  return (
    <TouchableOpacity onPress={onAddToCart}>
      <SmallContainer
        style={{
          display: "flex",
          flexDirection: "row",
          borderWidth: 2,
          width: "50%",
          height: 45,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 20,
          justifyContent: "center",
          maxWidth: 270,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            fontFamily: FONT_FAMILY,
            color: FONT_COLOR,
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          Add to cart
        </Text>
        <Icon
          name="add"
          style={{
            fontSize: 36,
            marginTop: "auto",
            marginBottom: "auto",
          }}
        />
      </SmallContainer>
    </TouchableOpacity>
  );
};

const _BeerInfoText = ({ text, pred = "", style }) => {
  return (
    <Text
      style={{
        textAlign: "left",
        fontSize: 20,
        fontFamily: FONT_FAMILY,
        color: FONT_COLOR,
        ...style,
      }}
    >
      {pred}
      {text}
    </Text>
  );
};
export default BeerDetails;
