import * as React from "react";
import { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface IHeader {
  renderBackButton?: boolean;
  renderSettingsButton?: boolean;
  navigation: any;
}

export default class Header extends Component<IHeader> {

  private static defaultProps: IHeader = {
    renderBackButton: false,
    renderSettingsButton: false,
    navigation: null,
  };

  constructor(props: IHeader) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          {this.renderBackButton()}
          {this.renderSettingsButton()}
        </TouchableOpacity>
      </View>
    );
  }
  private renderBackButton() {
    if (this.props.renderBackButton) {
      return (
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      );
    }
  }
  private renderSettingsButton() {
    if (this.props.renderSettingsButton) {
      return (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("settings")}>
          <Text>Go to Settings</Text>
        </TouchableOpacity>
      );
    }
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: 80,
  },
});
