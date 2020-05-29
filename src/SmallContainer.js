import React from "react";
import { View } from "react-native";
import {
  SMALL_CONTAINER_BACKGROUND_COLOR,
  SMALL_CONTAINER_BORDER_COLOR,
} from "./Constants";

const SmallContainer = ({ style, children }) => {
  return (
    <View
      style={{
        backgroundColor: SMALL_CONTAINER_BACKGROUND_COLOR,
        borderColor: SMALL_CONTAINER_BORDER_COLOR,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 6,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default SmallContainer;
