import { AppLoading, SplashScreen, Updates } from "expo";
import { Asset } from "expo-asset";
import Constants from "expo-constants";
import React from "react";
import { Animated, StyleSheet, View, TouchableOpacity } from "react-native";

import Menu from "./src/Menu";
import Pickup from "./src/Pickup";
import * as Font from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-material-ui";

const Stack = createStackNavigator();

SplashScreen.preventAutoHide();

export default function App() {
  return (
    <AnimatedAppLoader image={{ uri: Constants.manifest.splash.image }}>
      <MainScreen />
    </AnimatedAppLoader>
  );
}

function MainScreen() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} options={screenOptions} />

        <Stack.Screen
          name="Pickup"
          component={Pickup}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AnimatedAppLoader({ children, image }) {
  const [isSplashReady, setSplashReady] = React.useState(false);

  const startAsync = React.useMemo(
    // If you use a local image with require(...), use `Asset.fromModule`
    () => () => Asset.fromURI(image).downloadAsync(),
    [image]
  );

  const onFinish = React.useMemo(() => setSplashReady(true), []);

  if (!isSplashReady) {
    return (
      <AppLoading
        startAsync={startAsync}
        onError={console.error}
        onFinish={onFinish}
      />
    );
  }

  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
}

function AnimatedSplashScreen({ children, image }) {
  const animation = React.useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = React.useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = React.useState(
    false
  );

  React.useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 5,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady]);

  const onImageLoaded = React.useMemo(() => async () => {
    SplashScreen.hide();
    try {
      // Load stuff

      await Promise.all([
        Font.loadAsync({
          "SanvitoPro-Disp": require("./assets/fonts/SanvitoPro-Disp.ttf"),
        }),
      ]);
    } catch (e) {
      // handle errors
    } finally {
      setAppReady(true);
    }
  });

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: Constants.manifest.splash.backgroundColor,
              opacity: animation,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: Constants.manifest.splash.resizeMode || "contain",
              transform: [
                {
                  scale: animation,
                },
              ],
            }}
            source={image}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: "#D99311",
  },
  headerTitleStyle: {
    backgroundColor: "#D99311",
    fontFamily: "SanvitoPro-Disp",
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: 36,
    color: "#693800",
  },
  headerRight: (props) => <View style={{ height: "100%" }}></View>,
  headerLeft: (props) => (
    <View>
      {props.onPress && (
        <TouchableOpacity onPress={() => props.onPress()} style={{ margin: "auto" }}>
          <Icon name="arrow-back" style={{ fontSize: 36, marginLeft: 10 }} />
        </TouchableOpacity>
      )}
    </View>
  ),
};
