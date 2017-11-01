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
  title?: string;
  description?: string;
  customDescription?: string;
}

class Header extends Component<IHeader> {

  private static defaultProps: IHeader = {
    backButton: false,
    settingsButton: false,
    navigation: null,
    title: "MRTDown?",
    description: "",
    customDescription: "",
  };

  constructor(props: IHeader) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/app-icon.png")} />
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.description}>
          {this.props.customDescription || this.props.description}
        </Text>
        {this.renderBackButton()}
        {this.renderSettingsButton()}
      </View >
    );
  }

  private renderBackButton() {
    if (this.props.backButton) {
      return (
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Image source={require("../../assets/back-icon.png")} />
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
            <Image source={require("../../assets/settings-icon.png")} />
          </TouchableOpacity>
        </View>
      );
    }
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2D2925",
    padding: 10,
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  description: {
    color: "white",
    fontWeight: "bold",
  },
});

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(Header);
