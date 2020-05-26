import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import BrewieHeader from "./BrewieHeader";
import { BREWERS, BACKGROUND_COLOR } from "./Constants";

const Menu = ({ navigation }) => {
  return (
    <ScrollView style={styles.menuContainer}>
      <View style={styles.menu}>
        {BREWERS.map(({ itemId, name, url }) => (
          <BrewieHeader
            key={name}
            name={name}
            imageUrl={url}
            onClick={() => navigation.navigate("Pickup", { itemId })}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: BACKGROUND_COLOR,
  },
  menu: {
    padding: 10,
  },
});
