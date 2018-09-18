import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Settings </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green"
    },
    text: {
        color: "#fff",
        fontSize: 30
    }
});

export default Settings;