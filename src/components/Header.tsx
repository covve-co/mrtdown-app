import * as React from "react";
import { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";

interface IHeader {
  backButton?: boolean;
  settingsButton?: boolean;
  navigation: any;
}

class Header extends Component<IHeader> {

  private static defaultProps: IHeader = {
    backButton: false,
    settingsButton: false,
    navigation: null,
  };

  constructor(props: IHeader) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>{this.props.description}</Text>
          {this.renderBackButton()}
          {this.renderSettingsButton()}
        </TouchableOpacity>
      </View>
    );
  }
  private renderBackButton() {
    if (this.props.backButton) {
      return (
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      );
    }
  }
  private renderSettingsButton() {
    if (this.props.settingsButton) {
      return (
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("settings")}>
            <Text>Go to Settings</Text>
          </TouchableOpacity>
        </View>
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

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(Header);
