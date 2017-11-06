import * as React from "react";
import { Component } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import Header from "../components/Header";
import Question from "../components/Question";

export default class ReportingScreen extends Component {

  public static navigationOptions = ({ navigation }: any) => ({
    header: (
      <Header
        backButton={true}
        settingsButton={true}
        navigation={navigation}
        title="Delay?"
      />
    ),
  })
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <View>
        {<Question title="Which line is down" />}
        {<Question title="Which Stations?" />}

        <View style={styles.buttonContainer}>
          <Button title="REPORT"
            color="#B63414"
            onPress={() => { console.log("hi"); }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
  },
});
