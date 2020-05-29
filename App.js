import { SplashScreen } from "expo";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Menu from "./src/Menu";
import Pickup from "./src/Pickup";
import { LOGO_URL } from "./src/Constants";
import AnimatedAppLoader from "./src/AnimatedAppLoader";
import { BrewersContextProvider } from "./src/context/BrewersContext";
import { CheckoutContextProvider } from "./src/context/CheckoutContext";
import Topbar from "./src/TopBar";
import Cart from "./src/Cart";
import Stack from "./src/context/stackNavigator";

// SplashScreen.preventAutoHide();

export default function App() {
  return (
    <AnimatedAppLoader image={{ uri: LOGO_URL }}>
      <Providers>
        <MainScreen />
      </Providers>
    </AnimatedAppLoader>
  );
}

const Providers = ({ children }) => (
  <BrewersContextProvider>
    <CheckoutContextProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </CheckoutContextProvider>
  </BrewersContextProvider>
);
function MainScreen() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} options={Topbar} />
        <Stack.Screen name="Pickup" component={Pickup} options={Topbar} />
        <Stack.Screen name="Cart" component={Cart} options={Topbar} />
      </Stack.Navigator>
  );
}
