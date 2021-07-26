import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button,
  Image,
} from "react-native";
import { gStyle } from "../styles/style";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Contacts({ route }) {
  //   const loadScene = () => {
  //     navigation.goBack();
  //   };
  return (
    <View style={gStyle.main}>
      <Image
        style={styles.image}
        source={{
          uri: route.params.img,
        }}
      />
      <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
      <Text style={styles.full}>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    fontFamily: "mt-light",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: "blue",
  },
  header: {
    fontSize: 25,
    marginTop: 25,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
