import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import HttpProduts from '../../../services/Products/http-produts';

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productdetail: {}
    };
  }
  componentDidMount = () => {
    id = this.props.navigation.getParam('idProduct', 'no-data') ;
    this.getProductById(id);
  };

  async getProductById(id){
    const data = await HttpProduts.getProduct(id);
    this.setState({
      productdetail: data
    })
    console.log(data);
  } 

  render() {
    return (
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: this.state.productdetail.avatar
          }}
          style={styles.imageProfile}
        />
        <Text style={styles.profileName}>
          Nombre Producto: {this.state.productdetail.name}
        </Text>
        <Text style={styles.profileLocation}>
          Descripcion del Producto: {this.state.productdetail.description}
        </Text>
        <Text> Precio: {this.state.productdetail.price}</Text>
        <Text> Cantidad: {this.state.productdetail.quantity}</Text>
        <View style={styles.containerButton}>
          <TouchableOpacity
            onPress={() => this.props.onPressEvent(this.state.productdetail)}>
            <View style={styles.buttonOpacity}>
              <Text style={styles.buttonTextOpacity}>Agregar al Carrito</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: "#B0BEC5",
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
  },
  buttonOpacity: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#3949AB',
    borderRadius: 20,
  },
  buttonTextOpacity: {
    padding: 20,
    color: 'white',
    fontSize: 18,
    fontFamily: "IndieFlower"
  }
});

export default ItemDetail;
