import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { BREWERS, FONT_COLOR, FONT_FAMILY } from "./Constants";
import BrewieHeader from "./BrewieHeader";
import { BACKGROUND_COLOR } from "./Constants";
import SimpleContainer from "./SimpleContainer";
import { Icon } from "react-native-material-ui";
import PriceText from "./PriceText";
import { useBrewersContext } from "./context/BrewersContext";

const Pickup = ({ route }) => {
  const { itemId } = route.params;
  const brewers = useBrewersContext();

  const brewer = brewers.find((brewer) => brewer.itemId == itemId);

  return (
    <ScrollView style={{ backgroundColor: BACKGROUND_COLOR, height: "100%" }}>
      <BrewieHeader
        style={{ paddingTop: 10, paddingBottom: 10, borderRadius: 20 }}
        imageStyle={{ height: 70, width: 70, right: -35, top: 5 }}
        name={brewer.name}
        imageUrl={brewer.url}
        onClick={() => {}}
      />
      <View
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          paddingBottom: 30,
        }}
      >
        {brewer.beers.map(({ id, url, price, name }) => (
          <_BeerContainer
            key={id}
            beerId={id}
            url={url}
            price={price}
            name={name}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const _BeerContainer = ({ beerId, url, price, name }) => {
  return (
    <SimpleContainer
      style={{
        width: 170,
        marginTop: 15,
        display: "flex",
        flexDirection: "column",
        paddingBottom: 0,
        paddingTop: 5,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Image
        source={{ uri: url }}
        style={{
          height: 170,
          width: 40,
          margin: "auto",
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
      <PriceText price={price} />
      <Icon
        name="add-circle-outline"
        style={{
          margin: "auto",
          fontSize: 36,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </SimpleContainer>
  );
};

export default Pickup;
