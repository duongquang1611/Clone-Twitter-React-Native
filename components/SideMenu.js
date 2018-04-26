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
            <View style={{ flex: 6 }}>
              <Text style={styles.textFollow}>890 Đang theo dõi</Text>
            </View>
            <View style={{ flex: 6 }}>
              <Text style={styles.textFollow}>400 Người theo dõi</Text>
            </View>
          </View>
          {/* <View style={styles.keNgang} /> */}
        </View>
        <View style={styles.viewSmallMenu}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HoSo")}
          >
            <View style={styles.icon}>
              <View style={{ flex: 2, marginLeft: 10 }}>
                <Ionicons
                  name="ios-person-outline"
                  size={35}
                  color={color.darkGray}
                />
              </View>
              <View style={{ flex: 8 }}>
                <Text style={styles.baseText1}>Hồ sơ</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("DanhSach")}
          >
            <View style={styles.icon}>
              <View style={{ flex: 2, marginLeft: 10 }}>
                <Ionicons
                  name="ios-list-box-outline"
                  size={35}
                  color={color.darkGray}
                />
              </View>
              <View style={{ flex: 8 }}>
                <Text style={styles.baseText1}>Danh sách</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("DauTrang")}
          >
            <View style={styles.icon}>
              <View style={{ flex: 2, marginLeft: 10 }}>
                <Ionicons
                  name="ios-bookmark-outline"
                  size={35}
                  color={color.darkGray}
                />
              </View>
              <View style={{ flex: 8 }}>
                <Text style={styles.baseText1}>Dấu trang</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("KhoanhKhac")}
          >
            <View style={styles.icon}>
              <View style={{ flex: 2, marginLeft: 10 }}>
                <Ionicons
                  name="ios-flash-outline"
                  size={35}
                  color={color.darkGray}
                />
              </View>
              <View style={{ flex: 8 }}>
                <Text style={styles.baseText1}>Khoảnh khắc</Text>
              </View>
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
          <View
            style={{ flex: 5, justifyContent: "flex-start", marginLeft: 20 }}
          >
            <Ionicons name="ios-moon-outline" size={35} color={color.blue} />
          </View>
          <View style={{ flex: 5, alignItems: "flex-end", marginRight: 20 }}>
            <Ionicons
              name="ios-qr-scanner-outline"
              size={35}
              color={color.blue}
            />
          </View>
        </View>
      </View>
    );
  }
}
