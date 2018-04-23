import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { styleLogin } from "../styles/styleLogin";

export default class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={styleLogin.viewLogo}>
          <Image
            source={require("../../img/bird.png")}
            style={styleLogin.imageInLogoTitle}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("manHinh_SignUp2");
          }}
        >
          <Text style={styleLogin.textInLogoTitle}>Đăng kí</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
