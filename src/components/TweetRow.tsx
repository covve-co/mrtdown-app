import * as React from "react";
import { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

interface ITweetRow {
    handle: string;
    description: string;
    timestamp: string;
}

export default class TweetRow extends Component<ITweetRow> {
    public constructor(props: ITweetRow) {
        super(props);
    }

    public render() {
        return (
            <View style={{ flexDirection: "row" }}>
                <View style={styles.container}>
                    <Text style={styles.handle}>@{this.props.handle}</Text>
                    <Text
                        numberOfLines={1}
                        style={styles.description}>
                        {this.props.description}
                    </Text>
                </View>
                <Text style={styles.timestamp}>{this.props.timestamp}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: "column",
        flex: 1,
    },
    handle: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#000000",
    },
    description: {
        fontSize: 14,
        color: "#95989A",
        paddingTop: 5,
        fontWeight: "bold",
    },
    timestamp: {
        paddingTop: 15,
        paddingRight: 15,
    },
});
