import * as React from "react";
import { Component } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../components/Header";
import LineRow from "../components/LineRow";
import * as actionCreators from "../redux/action.creators";

class MainScreen extends Component {
  public static navigationOptions = ({ navigation }: any) => ({
    header: (
      <Header
        settingsButton={true}
        navigation={navigation}
      />),

  })
  constructor(props: any) {
    super(props);
    this.props.actions.fetchLineStatus();
  }
  public render() {
    return (
      <View>
        {this.renderLines()}
        <Button
          title="REPORT A DELAY"
          color="#B63414"
          onPress={() => this.props.navigation.navigate("reporting")}
        />
      </View>
    );
  }

  public renderLines() {
    return (
      <View>
        {this.renderLine({ short_name: "EWL", level: 4 }, 1)}
      </View>
    );
  }
  public renderLine(line, i) {
    return (
      <LineRow
        key={i}
        title={line.short_name}
        level={line.level}
        description={"Broken down from Woodlands to Bishan"} />
    );
  }
}

const styles = StyleSheet.create({
});
const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
