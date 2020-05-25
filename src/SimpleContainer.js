import { View } from "react-native";
import React, { useState, useEffect } from "react";


const SimpleContainer = ({ children, style }) => {
  return (
    <View
      style={{
        width: "90%",
        margin: "auto",
        padding: 20,
        borderColor:"#693800",
        borderWidth:4,
        borderStyle:"solid",
        borderRadius: 25,
        backgroundColor:"#F8F0C6",
        ...style
      }}
    >
      {children}
    </View>
  );
};

export default SimpleContainer;