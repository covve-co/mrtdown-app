import * as React from "react";
import { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import { CheckBox } from "react-native-elements";

export default class SettingsScreen extends Component {
  public static navigationOptions = ({ navigation }: any) => ({
    header: (
      <Header
        backButton={true}
        navigation={navigation}
        title="Setings."
        customDescription="Push Notifications, more info"
      />
    ),
  })
  public render() {
    const lines: string[] = ["All lines", "NSL", "EWL", "CCL", "DTL", "NEL"];
    return (
      lines.map((line, i) => {
        return (
          <CheckBox
            key={i}
            title={line} checked={false}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="#2D2925"
            containerStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
          />
        );
    );
  }
}
