import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import { styleSignUp } from "../styles/styleSignUp";
import { styleLogin } from "../styles/styleLogin";
export default class SignUp2 extends Component {
  render() {
    return (
      <View style={styleSignUp.viewLogin}>
        <TextInput
          style={styleSignUp.inputText}
          placeholder="Tên"
          autoFocus={true}
        />
        <TextInput
          style={styleSignUp.inputText}
          placeholder="Số điện thoại hoặc email"
        />
        <View style={styleLogin.viewButton}>
          <TouchableOpacity
            style={styleLogin.loginButton}
            onPress={() => this.props.navigation.navigate("Tabbar")}
          >
            <Text style={styleLogin.textLogin}>Tiếp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
