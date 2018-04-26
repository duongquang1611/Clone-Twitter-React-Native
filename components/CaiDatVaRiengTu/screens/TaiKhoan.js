import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
// class change screen
import ChangeScreenCaiDatVaRiengTu from "../components/ChangeScreenCaiDatVaRiengTu";
import { styles } from "../../styles/styleCaiDatVaRiengTu";
import { color } from "../../styles/color";
import Header from "../../styles/Header";

export default class TaiKhoan extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.viewHeader}>
        <View style={styles.viewHeader}>
          <Header
            title="Tài khoản"
            iconName="md-arrow-back"
            iconColor={color.blue}
            manHinhDich="CaiDatVaRiengTu"
            navigate={this.props.navigation.navigate}
          />
        </View>
        <View style={styles.viewContent}>
          <ScrollView style={styles.viewMain}>
            <View style={styles.viewTitle}>
              <Text style={styles.titleText}>Đăng nhập và bảo mật</Text>
            </View>
            <ChangeScreenCaiDatVaRiengTu
              textButton="Tên người dùng"
              manHinhDich=""
              navigate={this.props.navigation.navigate}
            />
            <ChangeScreenCaiDatVaRiengTu
              textButton="Số điện thoại"
              manHinhDich=""
              navigate={this.props.navigation.navigate}
            />
            <ChangeScreenCaiDatVaRiengTu
              textButton="Email"
              manHinhDich=""
              navigate={this.props.navigation.navigate}
            />
            <ChangeScreenCaiDatVaRiengTu
              textButton="Mật khẩu"
              manHinhDich=""
              navigate={this.props.navigation.navigate}
            />
            <ChangeScreenCaiDatVaRiengTu
              textButton="Bảo mật"
              manHinhDich=""
              navigate={this.props.navigation.navigate}
            />
            <View style={styles.viewTitle}>
              <Text style={styles.titleText}>Dữ liệu và sự cho phép</Text>
            </View>

            <ChangeScreenCaiDatVaRiengTu
              textButton="Quốc gia"
              manHinhDich=""
              navigate={this.props.navigation.navigate}
            />
            <ChangeScreenCaiDatVaRiengTu
              textButton="Dữ liệu Twitter của bạn"
              manHinhDich=""
              navigate={this.props.navigation.navigate}
            />
            <ChangeScreenCaiDatVaRiengTu
              textButton="Đăng xuất"
              manHinhDich=""
              navigate={this.props.navigation.navigate}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
