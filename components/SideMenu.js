import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        {/* <Text>Hồ sơ</Text>
        <Text>Danh sách</Text>
        <Text>Dấu trang</Text>
        <Text>Khoảnh khắc</Text>
        <Text>Cài đặt và riêng tư</Text>
        <Text>Trung tâm trợ giúp</Text> */}
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HoSo")}
          >
            <Text>Hồ sơ</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("DanhSach")}
          >
            <Text>Danh sách</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("DauTrang")}
          >
            <Text>Dấu trang</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("KhoanhKhac")}
          >
            <Text>Khoảnh khắc</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CaiDatVaRiengTu")}
          >
            <Text>Cài đặt và riêng tư</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("TroGiup")}
          >
            <Text>Trung tâm Trợ giúp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
