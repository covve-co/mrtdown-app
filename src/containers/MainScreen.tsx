import * as React from "react";
import { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../components/Header";
export default class MainScreen extends Component {
  public static navigationOptions = ({ navigation }: any) => ({
    header: (
      <Header
        renderSettingsButton={true}
        navigation={navigation}
      />),

  })
  public render() {
    return (
      <View>
        <Text>
          Woah
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("reporting")}>
          <Text>Go to ReportingScreen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
