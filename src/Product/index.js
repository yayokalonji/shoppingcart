import React, { Component } from "react";
import { View, Text, StyleSheet, SectionList, Platform } from "react-native";
import ItemProduct from "./components/item-product";
import ItemSeparator from "./components/item-separator";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { productList: [] };
  }

  componentDidMount = () => {
    const products = [
      {
        name: "TV",
        price: "$2000",
        photo: "https://images.duckduckgo.com/iu/?u=https%3A%2F%2Ftokenhippygirl.files.wordpress.com%2F2014%2F03%2Ftv.jpg&f=1",
        description: "Television is a telecommunication\nmedium used for transmitting moving \nimages in monochrome, or in colour\n,and in two or three dimensions and sound",
        id: 1
      },
      {
        name: "Bike",
        price: "$500",
        photo: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fmoziru.com%2Fimages%2Fmotorcycle-clipart-dirt-bike-8.jpg&f=1",
        description: "A bicycle (or bike) is a small,\nhuman powered land vehicle with a seat\n,two wheels, two pedals, and a metal\nchain connected to cogs on the pedals\nand rear wheel. ",
        id: 2
      },
      {
        name: "Car",
        price: "$35000",
        photo: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fdoityourselfdaddy.com%2Fwp-content%2Fuploads%2F2017%2F05%2FCars-3-Lightning-McQueen.jpg&f=1",
        description: "A car is a road vehicle used to\ncarry passengers. It is also called an\nautomobile, which comes from the Greek\nword \"auto\" and the French\nword \"mobile\". ",
        id: 3
      },
      {
        name: "Book",
        price: "$20",
        photo: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.clipartpanda.com%2Flibrary-book-clipart-clip-art-library-6.jpg&f=1",
        description: "a handwritten or printed work\nof fiction or nonfiction, usually on\nsheets of paper fastened or bound\ntogether within covers.",
        id: 4
      }
    ];
    this.setState({ productList: products });
  };

  renderItem = ({ item }) => (
    <ItemProduct navigation={this.props.navigation} product={item} />
  );

  separatorComponent = () => <ItemSeparator />;

  sectionHeader = ({ section }) => (
    <Text style={styles.header}>{section.key}</Text>
  );

  keyExtractor = item => item.id.toString();

  render() {
    return (
      <View>
        <SectionList
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.separatorComponent}
          renderSectionHeader={this.sectionHeader}
          keyExtractor={this.keyExtractor}
          sections={[
            { data: this.state.productList, key: "Miscellanious" },
          ]}
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
