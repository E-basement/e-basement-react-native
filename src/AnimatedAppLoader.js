import { AppLoading, SplashScreen } from "expo";
import Constants from "expo-constants";
import React from "react";
import { Animated, StyleSheet, View } from "react-native";
import * as Font from "expo-font";


import {FONT_COLOR, FONT_FAMILY, BACKGROUND_COLOR} from './Constants';


function AnimatedAppLoader({ children, image }) {
  const [isSplashReady, setSplashReady] = React.useState(false);

  const startAsync = React.useMemo(
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
  const animation = React.useMemo(() => new Animated.Value(0), []);
  const [isAppReady, setAppReady] = React.useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = React.useState(
    false
  );

  React.useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 4500,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady]);

  const onImageLoaded = React.useMemo(() => async () => {
    SplashScreen.hide();
    try {
      await Promise.all([
        Font.loadAsync({
          "SanvitoPro-Disp": require("../assets/fonts/SanvitoPro-Disp.ttf"),
        }),
      ]);
    } catch (e) {
      // handle errors
    } finally {
      setAppReady(true);
    }
  });
  
  return (
    <View style={{ flex: 1, backgroundColor:BACKGROUND_COLOR }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (

        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor:BACKGROUND_COLOR,
            }
          ]}
        >
          <Animated.Image
            style={{
              width: '75%',
              maxWidth:520,
              height: "60%",
              margin:'auto',
              resizeMode: Constants.manifest.splash.resizeMode || "contain",
            }}
            source={image}

            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
          <Animated.Text style={{ opacity:animation, textAlign:'center',fontSize:85,width: "100%", height:'40%', fontFamily:FONT_FAMILY, color:FONT_COLOR}} >e-basement</Animated.Text>
        </Animated.View>
      )}
    </View>
  );
}


export default AnimatedAppLoader;