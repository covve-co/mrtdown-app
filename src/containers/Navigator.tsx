import * as React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import MainScreen from "./MainScreen";

const mainScreen = () => (
  <View>
    <MainScreen />
  </View>
);

const RootNavigator = StackNavigator({
  MainScreen: {
    screen: mainScreen,
  },
});

export default RootNavigator;
