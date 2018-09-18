import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Tab1 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Tabs 1 </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue"
    },
    text: {
        color: "#fff",
        fontSize: 30
    }
});

export default Tab1;
