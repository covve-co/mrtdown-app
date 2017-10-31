import * as React from "react";
import { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Header from "../components/Header";
class MainScreen extends Component {
  public static navigationOptions = ({ navigation }: any) => ({
    header: (
      <Header
        settingsButton={true}
        navigation={navigation}
      />),

  })
  public render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("reporting")}>
          <Text>Go to ReportingScreen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default MainScreen;
