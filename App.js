import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import Product from "./src/Product";
import ProductDetail from "./src/Detail";

const AppNavigator = StackNavigator(
  {
    ProductScreen: {
      screen: Product
    },
    DetailScreen: {
      screen: ProductDetail
    }
  },
  {
    initialRouteName: "ProductScreen"
  }
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppNavigator />;
  }
}
