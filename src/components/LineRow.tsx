import * as React from "react";
import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

interface ILineRowProps {
    title: string;
    level: number;
    description: string;
}

export default class LineRow extends Component<ILineRowProps> {
    private lineColor: string;
    private dab: string;

    constructor(props: ILineRowProps) {
        super(props);

        switch (this.props.title) {
            case "EWL":
                this.lineColor = "#418033";
                break;
            case "NSL":
                this.lineColor = "#B63414";
                break;
            default:
                this.lineColor = "#FF00FF";
        }
    }

    public render() {
        return (
            <View style={{ flexDirection: "column" marginTop: 15, marginLeft: 20, marginBottom: 20 }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={
                        { ...badgeContainer, backgroundColor: this.lineColor }
                    }>
                        {this.props.title}
                    </Text>
                    <Text style={styles.level}>
                        {"🔥".repeat(this.props.level)}
                    </Text>
                </View>
                <Text style={styles.description}>
                    {this.props.description}
                </Text>
            </View>
        );
    }
}

const badgeContainer = {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
};
const styles = StyleSheet.create({
    level: {
        marginTop: 5,
        marginLeft: 5,
        fontSize: 20,
    },
    description: {
        marginTop: 10,
        color: "#2D2925",
    },
});
