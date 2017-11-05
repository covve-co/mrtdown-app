import * as React from "react";
import { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../components/Header";
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
  }
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

const mapStateToProps = (state: any) => {
  return state;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
