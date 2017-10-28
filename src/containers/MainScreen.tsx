/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from "react";
import { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "../redux/store";

export default class MainScreen extends Component<{}> {
  public render() {
    return (
      <Provider store={store}>
        <View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});
