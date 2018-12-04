import React, { Component } from 'react';
import { View } from 'react-native';
import ItemDetail from './components/item-detail';
import { connect } from 'react-redux';
import { addProductToCart } from '../../../actions/cart-action-creator';
class ProductDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <ItemDetail onPressEvent={this.props.addItemToCart} navigation={this.props.navigation} />
      </View>
    );
  }
}

const mapDispatchToProsp = (dispatch) => {
   return {
    addItemToCart: (product) => dispatch(addProductToCart(product))
  }
}
export default connect(null, mapDispatchToProsp)(ProductDetail);