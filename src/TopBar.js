import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-material-ui";

const TopBar = ({ text }) => {
  return (
    <View style={styles.topBar}>
      <View onClick={() => {}} style={styles.backButton}>
        <Icon
          name="arrow-back"
          style={{ fontSize: 36, marginTop: 22, marginLeft: 10 }}
        />
      </View>

      <Text
        style={{
          fontFamily: "SanvitoPro-Disp",
          marginTop: "auto",
          marginBottom: "auto",
          fontSize: 36,
          color: "#693800",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    height: 80,
    backgroundColor: "#D99311",
    display: "flex",
    flexDirection: "row",
  },
  topBarText: {
    color: "#693800",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: "auto",
    marginBottom: "auto",
    fontFamily: "SanvitoPro-Disp",
  },
  backButton: {
    backgroundColor: "#D99311",
    width: 65,
  },

  red: {
    color: "red",
  },
});
