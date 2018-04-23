import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { styleLogin } from "../styles/styleLogin";
// import { Drawer } from "../Route";

export default class Login extends Component {
  render() {
    return (
      <View style={styleLogin.viewLogin}>
        <Text style={styleLogin.loginTextTitle}>Đăng nhập Twitter.</Text>
        <Text style={styleLogin.loginTextHint}>
          Điện thoại, email hoặc tên người dùng
        </Text>
        <TextInput
          keyboardType="email-address"
          style={styleLogin.inputLogin}
          autoFocus={true}
        />
        <Text style={styleLogin.loginTextHint}>Mật khẩu</Text>
        <TextInput style={styleLogin.inputLogin} secureTextEntry={true} />
        <Text style={styleLogin.forgot}>Quên mật khẩu?</Text>
        <View style={styleLogin.viewButton}>
          <TouchableOpacity
            style={styleLogin.loginButton}
            onPress={() => this.props.navigation.navigate("Tabbar")}
          >
            <Text style={styleLogin.textLogin}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
