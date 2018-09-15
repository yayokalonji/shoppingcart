import React, { Component } from "react";
import { View } from "react-native";
import ItemDetail from "./components/item-detail";
import httpProduts from "../../services/Products/http-produts";
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productdetail: {}
    };
  }

  componentDidMount = () => {
    this.getProduct();
  };

  async getProduct() {
    const data = await httpProduts.getProduct(
      this.props.navigation.getParam("idProduct")
    );
    this.setState({ productdetail: data });
  }

  render() {
    return (
      <View>
        <ItemDetail detail={this.state.productdetail} />
      </View>
    );
  }
}

export default ProductDetail;
