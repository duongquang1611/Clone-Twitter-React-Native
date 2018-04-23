import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles/sideMenuStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import { color } from "./styles//color";
export default class SideMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.viewAllMenu}>
        <View style={styles.viewAvatar}>
          <Image source={require("../img/avatar.jpg")} style={styles.avatar} />
          <Text style={styles.nameText}>Duong Quang</Text>
          <Text style={styles.smallText}>@duongquang1611</Text>
          <View style={styles.viewFollow}>
            <Text style={styles.textFollow}>890 Đang theo dõi</Text>
            <Text style={styles.textFollow}>400 Người theo dõi</Text>
          </View>
          {/* <View style={styles.keNgang} /> */}
        </View>
        <View style={styles.viewSmallMenu}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HoSo")}
          >
            <View style={styles.icon}>
              <Ionicons
                name="ios-person-outline"
                size={48}
                color={color.darkGray}
              />
              <Text style={styles.baseText1}>Hồ sơ</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("DanhSach")}
          >
            <View style={styles.icon}>
              <Ionicons
                name="ios-list-box-outline"
                size={40}
                color={color.darkGray}
              />
              <Text style={styles.baseText1}>Danh sách</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("DauTrang")}
          >
            <View style={styles.icon}>
              <Ionicons
                name="ios-bookmark-outline"
                size={55}
                color={color.darkGray}
              />
              <Text style={styles.baseText1}>Dấu trang</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("KhoanhKhac")}
          >
            <View style={styles.icon}>
              <Ionicons
                name="ios-flash-outline"
                size={57}
                color={color.darkGray}
              />
              <Text style={styles.baseText1}>Khoảnh khắc</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.viewCaiDat}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CaiDatVaRiengTu")}
          >
            <Text style={styles.baseText}>Cài đặt và riêng tư</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("TroGiup")}
          >
            <Text style={styles.baseText}>Trung tâm Trợ giúp</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewScanner}>
          <View style={{ flex: 5, justifyContent: "flex-start" }}>
            <Ionicons
              name="ios-moon-outline"
              size={55}
              color={color.darkGray}
            />
          </View>
          <View style={{ flex: 5, alignItems: "flex-end" }}>
            <Ionicons
              name="ios-qr-scanner-outline"
              size={55}
              color={color.darkGray}
            />
          </View>
        </View>
      </View>
    );
  }
}
