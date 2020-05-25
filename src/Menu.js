import React from "react";
import { StyleSheet, View } from "react-native";

import TopBar from "./TopBar";
import BrewieHeader from "./BrewieHeader";

const brewers = [
  {
    name: "Profesja",
    url:
      "https://cdn.discordapp.com/attachments/707186726896140319/714456379418476564/NoPath.png",
  },
  {
    name: "Stu Mostów",
    url:
      "https://cdn.discordapp.com/attachments/707186726896140319/714456046688534578/100Mostow.png",
  },
  {
    name: "AleBrowar",
    url:
      "https://cdn.discordapp.com/attachments/707186726896140319/714456308971208744/hopheads.png",
  },
];

const Menu = () => {
  return (
    <View style={styles.menuContainer}>
      <TopBar text="Menu" />
      <View style={styles.menu}>
        {brewers.map(({ name, url }) => (
          <BrewieHeader key={name} name={name} imageUrl={url} />
        ))}
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFDD0",
  },
  menu: {
    padding: 10,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});
