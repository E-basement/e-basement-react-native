import React from "react";
import { Text, View } from "react-native";
import { BREWERS } from "./Constants";
import BrewieHeader from "./BrewieHeader";
import { BACKGROUND_COLOR } from "./Constants";

const Pickup = ({ route }) => {
  const { itemId } = route.params;
  const item = BREWERS.find((brewer) => brewer.itemId == itemId);
  return (
    <View style={{ backgroundColor: BACKGROUND_COLOR, height: "100%" }}>
      <BrewieHeader
        style={{ paddingTop: 10, paddingBottom: 10, borderRadius: 20 }}
        imageStyle={{height:70, width:70, right:-35, top:5}}
        name={item.name}
        imageUrl={item.url}
        onClick={() => {}}
      />
      <Text>{itemId}</Text>
    </View>
  );
};

export default Pickup;
