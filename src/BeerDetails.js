import React from "react";
import { Text, Image, ScrollView } from "react-native";

import { useBreweriesContext } from "./context/BreweriesContext";
import { BACKGROUND_COLOR, FONT_COLOR, FONT_FAMILY } from "./Constants";
import SimpleContainer from "./SimpleContainer";

const BeerDetails = ({ route }) => {
  const { beerId } = route.params;
  const breweries = useBreweriesContext();
  const beer = breweries
    .flatMap(({ beers }) => beers)
    .find(({ id }) => id === beerId);
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
          minHeight:100,
          maxWidth:1000
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 40,
            fontFamily: FONT_FAMILY,
            color: FONT_COLOR,
            marginTop:'auto',
            marginBottom:'auto'
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
          marginBottom:15,
          maxWidth:1000
        }}
      >
        <Image
          source={{ uri: beer.url }}
          style={{
            height: 362,
            width: 95,
            margin: "auto",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <_BeerInfoText
          style={{ marginTop: 5, fontSize: 24 }}
          text={beer.description}
        />
        <_BeerInfoText
          style={{ marginTop: 15 }}
          text={beer.ingredients}
          pred={"Ingredients: "}
        />
      </SimpleContainer>
    </ScrollView>
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
