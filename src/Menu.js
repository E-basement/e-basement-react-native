import { SplashScreen, Updates } from "expo";
import React, { useState, useEffect } from "react";
import { StyleSheet, Button, Text, View } from "react-native";

import TopBar from "./TopBar";

const Menu = () => {
  return (
    <View style={styles.menuContainer}>
      <TopBar text="Menu" />
      <View style={styles.menu}>
        <Text>Menu</Text>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFDD0"
  },
  menu: {
  
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
