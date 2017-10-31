import * as React from "react";
import { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../components/Header";

export default class ReportingScreen extends Component {
  public static navigationOptions = ({ navigation }: any) => ({
    header: (
      <Header
        backButton={true}
        settingsButton={true}
        navigation={navigation}
      />
    ),
  })
  public render() {
    return (
      <View>
        <Text>Reporting Screen</Text>
      </View>
    );
  }
}
