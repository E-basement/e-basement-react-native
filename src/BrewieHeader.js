import React from "react";
import { Text, View, Image } from "react-native";

import SimpleContainer from "./SimpleContainer";

const BrewieHeader = ({ name, imageUrl, onClick }) => {
  return (
    <View onClick={onClick}>
      <Image
        source={{ uri: imageUrl }}
        style={{
          height: 120,
          width: 120,
          position: "absolute",
          zIndex: 1,
          right: 0,
          top: 35,
        }}
      />
      <SimpleContainer
        key={name}
        style={{
          marginTop: 20,
          marginLeft: 10,
          marginBottom: 20,
          width: "80%",
          paddingLeft: 5,
        }}
      >
        <Text
          style={{
            color: "#693800",
            fontFamily: "SanvitoPro-Disp",
            fontSize: 50,
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 10,
          }}
        >
          {name}
        </Text>
      </SimpleContainer>
    </View>
  );
};

export default BrewieHeader;
