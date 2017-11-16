import * as React from "react";
import { Component } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../components/Header";
import LineRow from "../components/LineRow";
import TweetRow from "../components/TweetRow";
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
    this.props.actions.fetchTwitterData();
  }
  public render() {
    return (
      <View>
        {this.renderError()}
        {this.renderLines()}
        <Button
          title="REPORT A DELAY"
          color="#B63414"
          onPress={() => this.props.navigation.navigate("reporting")}
        />
        {this.renderTweets()}
      </View>
    );
  }

  public renderError() {
    if (this.props.error) {
      // TODO: Put modal here to show server error
      return (<Text>Error!!!</Text>);
    }
  }

  public renderLines() {
    function renderLine(line, i) {
      return (
        <LineRow
          verified={line.verified}
          key={i}
          title={line.shortName}
          level={line.level}
          description={line.description}
          timestamp={"1h"} />
      );
    }
    return (
      <View>
        {this.props.lines.map((data, index) => renderLine(data, index))}
      </View>
    );
  }

  public renderTweets() {
    function renderTweet(tweet, i) {
      const date1 = new Date(tweet.timestamp).getHours();
      const currentDate = new Date().getHours();
      const diff = currentDate - date1;
      return (
        <TweetRow
          key={i}
          handle={tweet.author}
          description={tweet.content}
          timestamp={diff.toString() + "h"} />
      );
    }
    return (
      <View>
        {this.props.tweets.map((data, index) => renderTweet(data, index))}
      </View>
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
