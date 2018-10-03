import React from "react";
import { createSwitchNavigator, StackNavigator, DrawerNavigator } from "react-navigation";
import Product from "../scenes/Product";
import ProductDetail from "../scenes/Detail";
import Tab1 from "../components/tab-1";
import Tab2 from "../components/tab-2";
import Tab3 from "../components/tab-3";
import Settings from "../components/settings";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import SideMenu from "./side-menu";
import AuthLoading from "./../scenes/Login/authLoading";
import Auth from "./../scenes/Login/auth";

const Stack = StackNavigator(
  {
    Product: { screen: Product },
    ProductDetail: { screen: ProductDetail }
  },
  {
    initialRouteName: "Product"
  }
);

const iconTab1 = <Icon name="user-circle" size={24} color="#999" />;
const iconTab2 = <Icon name="rocket" size={24} color="#999" />;
const iconTab3 = <Icon name="address-card" size={24} color="#999" />;

const Tabs = createBottomTabNavigator(
  {
    Tab1: {
      screen: Tab1,
      navigationOptions: {
        title: "Mi Perfil",
        tabBarIcon: iconTab1
      }
    },
    Tab2: {
      screen: Tab2,
      navigationOptions: {
        title: "Viajes",
        tabBarIcon: iconTab2
      }
    },
    Tab3: {
      screen: Tab3,
      navigationOptions: {
        title: "Contactos",
        tabBarIcon: iconTab3
      }
    }
  },
  {
    order: ["Tab1", "Tab2", "Tab3"],
    initialRouteName: "Tab2",
    tabBarOptions: {
      activeTintcolor: "#e91e63",
      labelStyle: {
        fontSize: 16
      },
      style: {
        backgroundColor: "black"
      }
    }
  }
);

export const Drawer = DrawerNavigator(
  {
    Stack: { screen: Stack },
    Tabs: { screen: Tabs },
    Settings: { screen: Settings }
  },
  {
    drawerWidth: 300,
    contentComponent: SideMenu
  }
);

export const SwitchNavigator = createSwitchNavigator({
  Auth: Auth,
  AuthLoading: AuthLoading,
  App: Drawer
}, {
    initialRouteName: 'AuthLoading',
  });