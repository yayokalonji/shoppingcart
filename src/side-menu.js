import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

class SideMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.itemSectionNav}>
            <Text
              style={styles.textItemNav}
              onPress={() => this.props.navigation.navigate("Stack")}
            >
              Stack
            </Text>
          </View>
          <View style={styles.itemSectionNav}>
            <Text
              style={styles.textItemNav}
              onPress={() => this.props.navigation.navigate("Tabs")}
            >
              Tabs
            </Text>
          </View>
          <View style={styles.itemSectionNav}>
            <Text
              style={styles.textItemNav}
              onPress={() => this.props.navigation.navigate("Settings")}
            >
              Settings
            </Text>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text> Powered by ETN</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "#ccc"
  },
  itemSectionNav: {
    margin: 15,
    backgroundColor: "#ccc"
  },
  textItemNav: {
    fontSize: 24
  },
  footerContainer: {
    padding: 15,
    fontSize: 18
  }
});

export default SideMenu;
