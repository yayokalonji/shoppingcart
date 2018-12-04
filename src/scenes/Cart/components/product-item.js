import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

const ProductItem = props => (
    <TouchableHighlight
        underlayColor={'#f2f2f2'}
        onPress={() => props.onPressEvent(props.item)}>
        <View style={styles.container}>
            <Text>{props.item.name}</Text>
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    }
});

export default ProductItem;