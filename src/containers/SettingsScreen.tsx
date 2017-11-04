import * as React from "react";
import { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../components/Header";

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
    return (
      <View>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}
