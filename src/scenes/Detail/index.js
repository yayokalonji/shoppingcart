import React, { Component } from "react";
import { View, Text } from "react-native";
import Api from "./../../utils/api";
import ItemDetail from "./components/item-detail";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productdetail: {}
    };
  }

  componentDidMount = () => {
    this.invokeProductsDetail();
  };

  async invokeProductsDetail() {
    const data = await Api.getProductsAwait(
      this.props.navigation.getParam("idProduct")
    );
    console.log(data);
    this.setState({
      productdetail: data
    });
  }

  render() {
    return (
      <View>
        <ItemDetail detail={this.state.productdetail}/>
      </View>
    );
  }
}

export default ProductDetail;
