import React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet
} from "react-native";

const ItemProduct = props => (
  <TouchableHighlight onPress={() => props.navigation.navigate("DetailScreen", { idProduct: props.product._id })}>
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: props.product.avatar }} />
      </View>
      <View style={styles.content}>
        <Text>{props.product.name}</Text>
        <Text>{props.product.price}</Text>
        <Text>{props.product.description}</Text>
      </View>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  content: {
    paddingLeft: 10,
    justifyContent: "center"
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 35,
    padding: 5,
    margin: 5
  },
  productName: {
    fontSize: 24,
    fontWeight: "200"
  }
});

export default ItemProduct;
