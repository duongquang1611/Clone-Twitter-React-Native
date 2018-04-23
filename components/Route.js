import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  DrawerNavigator
} from "react-navigation";

// style
import { styleLogin } from "./styles/styleLogin";
import { color } from "./styles/color";

// custom header
import LogoTitle from "./screens/LogoTitle";
import SignUpTitle from "./screens/SignUpTitle";

//screens welcome, login
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import SignUp2 from "./screens/SignUp2";
import Message from "./screens/Message";
import Notification from "./screens/Notification";
import Search from "./screens/Search";

//screen menu
import SideMenu from "./SideMenu";
import HoSo from "./screens/HoSo";
import DanhSach from "./screens/DanhSach";
import DauTrang from "./screens/DauTrang";
import KhoanhKhac from "./screens/KhoanhKhac";
import CaiDatVaRiengTu from "./screens/CaiDatVaRiengTu";
import TroGiup from "./screens/TroGiup";

// tab man hinh chinh
const Tabbar = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: "Trang chủ",
        headerTitleStyle: {
          color: color.black
        }
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        headerTitle: "Tìm kiếm",
        headerTitleStyle: {
          color: color.black
        }
      }
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        headerTitle: "Thông báo",
        headerTitleStyle: {
          color: color.black
        }
      }
    },
    Message: {
      screen: Message,
      navigationOptions: {
        headerTitle: "Tin nhắn",
        headerTitleStyle: {
          color: color.black
        }
      }
    }
  },
  {
    initialRouteName: "Home",
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: color.blue,
      inactiveTintColor: color.darkGray,
      style: {
        backgroundColor: color.white
      }
    },
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-home${focused ? "" : "-outline"}`;
        } else if (routeName === "Notification") {
          iconName = `ios-notifications${focused ? "" : "-outline"}`;
        } else if (routeName === "Search") {
          iconName = `ios-search${focused ? "" : "-outline"}`;
        } else if (routeName === "Message") {
          iconName = `ios-mail${focused ? "" : "-outline"}`;
        }
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    })
  }
);

//man hinh login
export const LoginStack = StackNavigator({
  manHinh_SignUp: {
    screen: SignUp,

    navigationOptions: {
      header: null
    }
  },
  manHinh_SignUp2: {
    screen: SignUp2,
    navigationOptions: {
      headerTitle: <SignUpTitle />
    }
  },
  manHinh_Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: <LogoTitle />
    }
  },
  Tabbar: {
    screen: Tabbar
  }
});

// export const myDrawer = StackNavigator({
//   myDrawer: { screen: Drawer }
// });
export const Drawer = DrawerNavigator(
  {
    Tabbar: { screen: Tabbar },
    Home: { screen: Home },
    HoSo: { screen: HoSo },
    DanhSach: { screen: DanhSach },
    DauTrang: { screen: DauTrang },
    KhoanhKhac: { screen: KhoanhKhac },
    CaiDatVaRiengTu: { screen: CaiDatVaRiengTu },
    TroGiup: { screen: TroGiup }
  },
  {
    initialRouteName: "Tabbar",
    drawerWidth: 350,
    contentComponent: props => <SideMenu {...props} />
  }
);
