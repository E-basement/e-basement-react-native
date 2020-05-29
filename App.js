import { SplashScreen } from "expo";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Menu from "./src/Menu";
import Pickup from "./src/Pickup";
import { LOGO_URL } from "./src/Constants";
import AnimatedAppLoader from "./src/AnimatedAppLoader";
import { BrewersContextProvider } from "./src/context/BrewersContext";
import { CheckoutContextProvider } from "./src/context/CheckoutContext";
import Topbar from "./src/TopBar";
import Cart from "./src/Cart";

const Stack = createStackNavigator();

// SplashScreen.preventAutoHide();

export default function App() {
  return (
    <AnimatedAppLoader image={{ uri: LOGO_URL }}>
      <BrewersContextProvider>
        <CheckoutContextProvider>
          <MainScreen />
        </CheckoutContextProvider>
      </BrewersContextProvider>
    </AnimatedAppLoader>
  );
}

function MainScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} options={Topbar} />
        <Stack.Screen name="Pickup" component={Pickup} options={Topbar} />
        <Stack.Screen name="Cart" component={Cart} options={Topbar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
