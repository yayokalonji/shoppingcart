import React, { Component } from "react";
import { View, Text, StyleSheet, SectionList, Platform } from "react-native";
import ItemProduct from "./components/item-product";
import ItemSeparator from "./components/item-separator";
import Api from "./../../utils/api";
import httpProduts from "../../services/Products/http-produts";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { productList: [] };
  }

  componentDidMount = () => {
    /*     Api.getProducts()
      .then(data => {
        this.setState({ productList: data });
        console.log(data);
      })
      .catch(error => console.log(error)); */

      this.getProducts();
  };

  async getProducts() {
    const data = await httpProduts.getProducts();
    this.setState({ productList: data });
    console.log(data);
  }

  renderItem = ({ item }) => (
    <ItemProduct navigation={this.props.navigation} product={item} />
  );

  separatorComponent = () => <ItemSeparator />;

  sectionHeader = ({ section }) => (
    <Text style={styles.header}>{section.key}</Text>
  );

  keyExtractor = item => item._id.toString();

  render() {
    return (
      <View>
        <SectionList
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.separatorComponent}
          renderSectionHeader={this.sectionHeader}
          keyExtractor={this.keyExtractor}
          sections={[{ data: this.state.productList, key: "Miscellanious" }]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS == "ios" ? "#ccc" : "#992277",
    paddingVertical: 5,
    marginBottom: 5,
    ...Platform.select({
      ios: {
        paddingVertical: 5,
        marginBottom: 5
      },
      android: {
        paddingVertical: 15,
        marginBottom: 15
      }
    })
  }
});

export default Product;
