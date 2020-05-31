import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FONT_COLOR, FONT_FAMILY } from "./Constants";
import BrewieHeader from "./BrewieHeader";
import { BACKGROUND_COLOR } from "./Constants";
import SimpleContainer from "./SimpleContainer";
import { Icon } from "react-native-material-ui";
import PriceText from "./PriceText";
import { useBreweriesContext } from "./context/BreweriesContext";
import { useCheckoutContext } from "./context/CheckoutContext";

const Pickup = ({ route }) => {
  const { itemId } = route.params;
  const breweries = useBreweriesContext();
  const { addItem } = useCheckoutContext();
  const brewery = breweries.find((brewery) => brewery.itemId == itemId);
  const navigation = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: BACKGROUND_COLOR, height: "100%" }}>
      <BrewieHeader
        style={{ paddingTop: 10, paddingBottom: 10, borderRadius: 20 }}
        imageStyle={{ height: 70, width: 70, right: -35, top: 5 }}
        name={brewery.name}
        imageUrl={brewery.url}
        onClick={() => navigation.navigate("Brewery", { id:brewery.itemId })}
      />
      <View
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          paddingBottom: 30,
        }}
      >
        {brewery.beers.map(({ id, url, price, name }) => (
          <_BeerContainer
            key={id}
            beerId={id}
            url={url}
            price={price}
            name={name}
            onAddItemClick={() => addItem(id)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const _BeerContainer = ({ beerId, url, price, name, onAddItemClick }) => {
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

      <TouchableOpacity onPress={onAddItemClick}>
        <Icon
          name="add-circle-outline"
          style={{
            margin: "auto",
            fontSize: 36,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </TouchableOpacity>
    </SimpleContainer>
  );
};

export default Pickup;
