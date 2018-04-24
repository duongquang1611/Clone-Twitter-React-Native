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

import HoSo from "./screens/menu/HoSo";
import DanhSach from "./screens/menu/DanhSach";
import DauTrang from "./screens/menu/DauTrang";
import KhoanhKhac from "./screens/menu/KhoanhKhac";
import CaiDatVaRiengTu from "./screens/menu/CaiDatVaRiengTu";
import TroGiup from "./screens/menu/TroGiup";
import TaiKhoanMenu from "./screens/menu/TaiKhoanMenu";
import SideMenu from "./SideMenu";

// screens cai dat va rieng tu
import GioiThieuTwitter from "./CaiDatVaRiengTu/screens/GioiThieuTwitter";
import HienThiVaAmThanh from "./CaiDatVaRiengTu/screens/HienThiVaAmThanh";
import KhaNangTruyCap from "./CaiDatVaRiengTu/screens/KhaNangTruyCap";
import RiengTuVaBaoMat from "./CaiDatVaRiengTu/screens/RiengTuVaBaoMat";
import SuDungDuLieu from "./CaiDatVaRiengTu/screens/SuDungDuLieu";
import TaiKhoan from "./CaiDatVaRiengTu/screens/TaiKhoan";
import ThongBao from "./CaiDatVaRiengTu/screens/ThongBao";
import TuyChonNoiDung from "./CaiDatVaRiengTu/screens/TuyChonNoiDung";
import ViTriVaProxy from "./CaiDatVaRiengTu/screens/ViTriVaProxy";

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
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: color.blue,
      showIcon: true,
      showLabel: false,
      inactiveTintColor: color.darkGray,
      style: {
        backgroundColor: color.white
      }
    },
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        // lỗi k set được  icon..???
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-home${focused ? "" : "-outline"}`;
        } else if (routeName === "Search") {
          iconName = `ios-search${focused ? "" : "-outline"}`;
        } else if (routeName === "Notification") {
          iconName = `ios-notifications${focused ? "" : "-outline"}`;
        } else if (routeName === "Message") {
          iconName = `ios-mail${focused ? "" : "-outline"}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
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
    TaiKhoanMenu: { screen: TaiKhoanMenu },
    HoSo: { screen: HoSo },
    DanhSach: { screen: DanhSach },
    DauTrang: { screen: DauTrang },
    KhoanhKhac: { screen: KhoanhKhac },
    CaiDatVaRiengTu: { screen: CaiDatVaRiengTu },
    TroGiup: { screen: TroGiup }
  },
  {
    initialRouteName: "Tabbar",
    drawerWidth: 370,
    contentComponent: props => <SideMenu {...props} />
  }
);

const CaiDatVaRiengTuStack = StackNavigator({
  GioiThieuTwitter: { screen: GioiThieuTwitter },
  HienThiVaAmThanh: { screen: HienThiVaAmThanh },
  KhaNangTruyCap: { screen: KhaNangTruyCap },
  RiengTuVaBaoMat: { screen: RiengTuVaBaoMat },
  SuDungDuLieu: { screen: SuDungDuLieu },
  TaiKhoan: { screen: TaiKhoan },
  ThongBao: { screen: ThongBao },
  TuyChonNoiDung: { screen: TuyChonNoiDung },
  ViTriVaProxy: { screen: ViTriVaProxy }
});
