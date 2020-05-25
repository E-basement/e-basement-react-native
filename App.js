import { SplashScreen } from "expo";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-material-ui";

import Menu from "./src/Menu";
import Pickup from "./src/Pickup";
import {
  FONT_COLOR,
  LOGO_URL,
  FONT_FAMILY,
  TOPBAR_BACKGROUND_COLOR,
} from "./src/Constants";
import AnimatedAppLoader from "./src/AnimatedAppLoader";

const Stack = createStackNavigator();

SplashScreen.preventAutoHide();

export default function App() {
  return (
    <AnimatedAppLoader image={{ uri: LOGO_URL }}>
      <MainScreen />
    </AnimatedAppLoader>
  );
}

function MainScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} options={topBarOptions} />

        <Stack.Screen
          name="Pickup"
          component={Pickup}
          options={topBarOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const topBarOptions = {
  headerStyle: {
    backgroundColor: TOPBAR_BACKGROUND_COLOR,
  },
  headerTitleStyle: {
    backgroundColor: TOPBAR_BACKGROUND_COLOR,
    fontFamily: FONT_FAMILY,
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 36,
    color: FONT_COLOR,
  },
  headerRight: (props) => <View style={{ height: "100%" }}></View>,
  headerLeft: (props) => (
    <View>
      {props.onPress && (
        <TouchableOpacity
          onPress={() => props.onPress()}
          style={{ margin: "auto" }}
        >
          <Icon name="arrow-back" style={{ fontSize: 36, marginLeft: 10 }} />
        </TouchableOpacity>
      )}
    </View>
  ),
};
