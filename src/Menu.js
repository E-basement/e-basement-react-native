import React from "react";
import { StyleSheet, Text, View } from "react-native";

import SimpleContainer from "./SimpleContainer";
import TopBar from "./TopBar";

const Menu = () => {
  const brewers = [
    {
      name: "Profesja",
    },
    {
      name: "Stu Mostów",
    },
    {
      name: "AleBrowar",
    },
  ];
  return (
    <View style={styles.menuContainer}>
      <TopBar text="Menu" />
      <View style={styles.menu}>
        {brewers.map(({ name }) => (
          <SimpleContainer
            key={name}
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            <Text
              style={{
                color: "#693800",
                fontFamily: "SanvitoPro-Disp",
                fontSize:50,
                paddingTop:20,
                paddingBottom:20,
                paddingLeft:10
              }}
            >
              {name}
            </Text>
          </SimpleContainer>
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
