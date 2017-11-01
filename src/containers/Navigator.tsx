import * as React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import MainScreen from "./MainScreen";
import ReportingScreen from "./ReportingScreen";
import SettingsScreen from "./SettingsScreen";

const RootNavigator = StackNavigator({
  main: { screen: MainScreen },
  reporting: { screen: ReportingScreen },
  settings: { screen: SettingsScreen },
});

export default RootNavigator;
