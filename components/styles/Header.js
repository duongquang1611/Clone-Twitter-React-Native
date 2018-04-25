import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { color } from "./color";
import { styleLogin } from "../styles/styleLogin";
export default class Header extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            flex: 99,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white"
          }}
        >
          <View style={{ marginLeft: 15 }}>
            <TouchableOpacity
              onPress={() => this.props.navigate(this.props.manHinhDich)}
            >
              <Ionicons
                name={this.props.iconName}
                color={this.props.iconColor}
                size={35}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text
              style={{
                color: "black",
                fontSize: 30,
                fontFamily: color.fontText
              }}
            >
              {this.props.title}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: color.darkGray }} />
      </View>
    );
  }
}
