import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        productdetail: {}
    };
  }

  componentDidMount = () => {
      
  }

  render() {
    return (
      <View>
        <Text> Details Products </Text>
      </View>
    );
  }
}

export default ProductDetail;
