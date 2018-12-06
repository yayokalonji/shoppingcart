import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ProductList from './../Cart/components/product-list';
import { connect } from 'react-redux';
import { removeProductFromCart } from './../../../actions/cart-action-creator';

class CartScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ProductList onPressEvent={this.props.removeItem}
                    products={this.props.cartItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

const mapStateToProps = (state) => {
    return {
        cartItem: state  //replacing toJS() method
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch(removeProductFromCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);