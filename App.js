import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import Product from "./src/scenes/Product";
import ProductDetail from "./src/scenes/Detail";
import { Drawer } from "./src/navigation";


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
    return <Drawer />;
  }
}
