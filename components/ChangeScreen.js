import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View
} from "react-native";

export default class ChangeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(this.props.manHinhDich)}
        >
          <Text>{this.props.textButton}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
