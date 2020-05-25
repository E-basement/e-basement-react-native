import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { FONT_COLOR, FONT_FAMILY } from "./Constants";
import SimpleContainer from "./SimpleContainer";

const BrewieHeader = ({ name, imageUrl, onClick, style, imageStyle }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <SimpleContainer
        key={name}
        style={{
          marginTop: 20,
          marginLeft: 10,
          marginBottom: 20,
          width: "80%",
          paddingLeft: 15,
          paddingTop: 42,
          paddingBottom: 42,
          ...style,
        }}
      >
        <Image
          source={{ uri: imageUrl }}
          style={{
            height: 120,
            width: 120,
            position: "absolute",
            zIndex: 1,
            right: -60,
            top: 15,
            ...imageStyle,
          }}
        />
        <Text
          style={{
            color: FONT_COLOR,
            fontFamily: FONT_FAMILY,
            fontSize: 50,
          }}
        >
          {name}
        </Text>
      </SimpleContainer>
    </TouchableOpacity>
  );
};

export default BrewieHeader;
