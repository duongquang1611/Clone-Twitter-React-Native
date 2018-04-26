import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import { styles } from "../../styles/styleCaiDatVaRiengTu";
import { color } from "../../styles/color";
export default class ChangeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={({ flex: 1, flexDirection: "column" }, styles.viewMain)}>
        <View style={{ flex: 99 }}>
          <TouchableOpacity
            onPress={() => this.props.navigate(this.props.manHinhDich)}
          >
            <Text style={styles.baseText}>{this.props.textButton}</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{ flex: 88, backgroundColor: "black" }} /> */}
      </View>
    );
  }
}
