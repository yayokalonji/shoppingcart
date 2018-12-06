import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

const ShoppingCartIcon = props => (
    <View style={styles.container}>
        <View style={styles.badget}>
            <Text style={styles.badgetText}> {props.cartItems.length} </Text>
        </View>
        <Icon
            onPress={() => props.cartItems.length > 0 ? props.navigation.navigate('CartScreen') : alert('No tienes artículos en tu carrito de compras.')}
            name="shopping-cart" size={30} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    badget: {
        position: 'absolute',
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: 'blue',
        right: 15,
        bottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
    },
    badgetText: {
        color: '#fff',
        fontWeight: 'bold'
    }
}
);

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps, null)(withNavigation(ShoppingCartIcon));

