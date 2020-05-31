import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";

import SimpleContainer from "./SimpleContainer";
import { BACKGROUND_COLOR, FONT_COLOR, FONT_FAMILY } from "./Constants";
import { useBreweriesContext } from "./context/BreweriesContext";
import BrewieHeader from "./BrewieHeader";

const BreweryDetails = ({ route }) => {
  const breweryId = route.params.id;
  const brewery = useBreweriesContext().find(
    (brewery) => brewery.itemId == breweryId
  );
  return (
    <ScrollView style={{ backgroundColor: BACKGROUND_COLOR, height: "100%" }}>
      <BrewieHeader
        style={{ paddingTop: 10, paddingBottom: 10, borderRadius: 20 }}
        imageStyle={{ height: 70, width: 70, right: -35, top: 5 }}
        name={brewery.name}
        imageUrl={brewery.url}
        onClick={() => {}}
      />
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
          paddingLeft: 8,
          paddingRight: 8,
        }}
      >
        <_BreweryInfoText text={brewery.description} style={{ marginTop: 5, fontSize: 24 }} />
        <_BreweryInfoText text={brewery.fullName} style={{ marginTop: 15 }} />
        <_BreweryInfoText text={brewery.address} />
        <_BreweryInfoText text={brewery.email} pred={"Email: "} />
        <_BreweryInfoText text={brewery.phone} pred={"tel: "} />
      </SimpleContainer>
    </ScrollView>
  );
};

const _BreweryInfoText = ({ text, pred = "", style }) => {
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

export default BreweryDetails;
