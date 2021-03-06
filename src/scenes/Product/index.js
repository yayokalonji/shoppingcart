import React, { Component } from "react";
import { View, Text, StyleSheet, SectionList, Platform , Button, AsyncStorage} from "react-native";
import ItemProduct from "./components/item-product";
import ItemSeparator from "./components/item-separator";
import httpProduts from "../../services/Products/http-produts";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { productList: [] };
  }

  componentDidMount = () => {
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

  closeSession = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('AuthLoading')
  }

  render() {
    return (
      <View style = {{backgroundColor :'#B0BEC5'}}> 
        <SectionList
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.separatorComponent}
          renderSectionHeader={this.sectionHeader}
          keyExtractor={this.keyExtractor}
          sections={[{ data: this.state.productList, key: "Products" }]}
        />
        <Button
          onPress={this.closeSession}
          title="Close session"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS == "ios" ? "#3c3c3c" : "#3c3c3c",
    paddingVertical: 5,
    marginBottom: 5,
    color: "white",
    fontSize: 24,
    justifyContent: "center",
    ...Platform.select({
      ios: {
        paddingVertical: 15,
        marginBottom: 15
      },
      android: {
        paddingVertical: 15,
        marginBottom: 15
      }
    })
  }
});

export default Product;
