import React from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";

const ItemDetail = props => (
  <View style={styles.profileContainer}>
    <Image
      source={{
        uri: props.detail.avatar
      }}
      style={styles.imageProfile}
    />
    <Text style={styles.profileName}>
      Nombre Producto: {props.detail.name}
    </Text>
    <Text style={styles.profileLocation}>
      Descripcion del Producto: {props.detail.description}
    </Text>
    <Text> Precio: {props.detail.price}</Text>
    <Text> Cantidad: {props.detail.quantity}</Text>
    {/* <Button
      title="Add Cart"
    /> */}
  </View>
);

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: "#7B1FA2",
    alignItems: "center",
    padding: 5
  },
  profileTitle: {
    color: "#fff",
    fontSize: 30,
    alignItems: "center",
    marginBottom: 20
  },
  profileName: {
    color: "#fff",
    fontSize: 24,
    alignItems: "center",
    marginBottom: 20
  },
  profileLocation: {
    color: "#fff"
  },
  imageProfile: {
    width: 140,
    height: 140,
    borderRadius: 70,
    resizeMode: "cover"
  }
});

export default ItemDetail;
