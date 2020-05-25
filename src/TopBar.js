import { SplashScreen, Updates } from "expo";
import React, { useState, useEffect } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Icon } from "react-native-material-ui";
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import * as Font from "expo-font";

const TopBar = ({ text }) => {
  // let x = text;
  // const [isloaded,setLoaded] = useState(false);
  // useEffect(()=> {
  //   const load = async() => {
  //     try {  
  //       await Font.loadAsync({
  //           "SanvitoPro-Disp": require("../assets/fonts/SanvitoPro-Disp.ttf"),
  //         })
        
  //     } catch (e) {
  //       x = e.toString()
  //       // handle errors
  //     } finally {
  //       setLoaded(true);
  //     }
  //   }
  //   load();
  // },[])



  // if( !isloaded) return <Text>Loading</Text>
  return (
    <View style={styles.topBar}>
      <View onClick={() => {}} style={styles.backButton}>
        <Icon
          name="arrow-back"
          style={{ fontSize: 36, marginTop: 22, marginLeft: 10 }}
        />
      </View>

      <Text style={{fontFamily:'SanvitoPro-Disp'}}>{text}</Text>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    height: 80,
    // width: "100%",
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
    fontFamily:"SanvitoPro-Disp"
  },
  backButton: {
    backgroundColor: "#D99311",
    width: 65,
  },
  arrowBackIcon: {
    // width: "2em",
    // height: "2em",
  },
  red: {
    color: "red",
  },
});
