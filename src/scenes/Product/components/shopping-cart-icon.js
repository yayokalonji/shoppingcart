import React from 'react';
import {View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

const ShoppingCartIcon = props => (
    <View style={styles.container}>
        <Icon name="shopping-cart" size={30} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
});

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps, null)(ShoppingCartIcon);
