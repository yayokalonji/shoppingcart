import { StackNavigator, DrawerNavigator } from "react-navigation";
import Product from "./../src/scenes/Product";
import ProductDetail from "./../src/scenes/Detail";

const Stack = StackNavigator(
  {
    Product: { screen: Product },
    ProductDetail: { screen: ProductDetail }
  },
  {
    initialRouteName: "Product"
  }
);

export const Drawer = DrawerNavigator(
  {
    Stack: { screen: Stack },
    ProductDetail : {screen : ProductDetail}
  },
  {
    drawerWidth: 300
  }
);
