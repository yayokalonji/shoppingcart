import { StackNavigator, DrawerNavigator } from "react-navigation";
import Product from "./../src/scenes/Product";
import ProductDetail from "./../src/scenes/Detail";
import { SideMenu } from "./side-menu";

const StackProducts = StackNavigator(
  {
    ProductScreen: {
      screen: Product
    },
    ProductDetailScreen: {
      screen: ProductDetail
    }
  },
  {
    initialRouteName: "ProductScreen"
  }
);

export const StackCart = StackNavigator({
  CartScreen: {
    screen: Product
  }
});

export const Drawer = DrawerNavigator(
  {
    StackScreen: {
      screen: StackProducts
    },
    StackCartScreen: {
      screen: StackCart,
      contentComponent : SideMenu
    }
  },
  {
    drawerWidth: 300
  }
);
