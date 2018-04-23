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
import { styleSignUp } from "../styles/styleSignUp";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: "Xem chuyện gì đang xảy ra trên thế giới ngay lúc này.",
      question: "Bạn đã có một tài khoản? "
    };
  }
  render() {
    return (
      <View style={styleSignUp.viewLogin}>
        <Image
          source={require("../../img/bird.png")}
          style={styleSignUp.birdImg}
        />

        <Text style={styleSignUp.loginTextTitle}>{this.state.welcome}</Text>
        <View style={styleSignUp.viewButton}>
          <TouchableOpacity
            style={styleSignUp.loginButton}
            onPress={() => this.props.navigation.navigate("manHinh_SignUp2")}
          >
            <Text style={styleSignUp.textLogin}>Bắt đầu</Text>
          </TouchableOpacity>
        </View>

        <View style={styleSignUp.TextViewEnd}>
          <View>
            <Text style={styleSignUp.baseText}>{this.state.question}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("manHinh_Login");
              }}
            >
              <Text style={styleSignUp.nutDangNhap}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
