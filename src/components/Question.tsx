import * as React from "react";
import { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

interface IQuestionProps {
    title: string;
}

export default class Question extends Component<IQuestionProps> {

    constructor(props: IQuestionProps) {
        super(props);
    }

    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <TextInput style={styles.input}
                    multiline={false}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    selectionColor="#2D2925"
                    onChangeText={(text) => { console.log(text); }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 0,
    },
    title: {
        fontWeight: "bold",
        paddingBottom: 5,
        color: "#2D2925",
    },
    input: {
        borderWidth: 1.5,
        borderColor: "#000000",
        padding: 5,
    },
});
