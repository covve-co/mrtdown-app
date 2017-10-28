/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from "react";
import { Component } from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { View } from "react-native";
import store from "../redux/store";
import Navigator from "./Navigator";

export default class BaseScreen extends Component<{}> {
  public render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigator />
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
