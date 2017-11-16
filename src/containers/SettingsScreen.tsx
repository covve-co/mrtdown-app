import * as React from "react";
import { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { CheckBox } from "react-native-elements";
import * as actionCreators from "../redux/action.creators";

class SettingsScreen extends Component {
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

  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      Object.keys(this.props.subscribedLines).map((line, i) => {
        const lineSubscription = this.props.subscribedLines[line];
        return (
          <CheckBox
            key={i}
            title={line}
            checked={lineSubscription.subscribed}
            onPress={() => this.props.actions.toggleSubscription(
              {
                line,
                value: !lineSubscription.subscribed,
                topic: lineSubscription.topic,
              },
            )}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="#2D2925"
            containerStyle={{ backgroundColor: "rgba(0,0,0,0)" }}
          />
        );
      }));
  }
}
const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
