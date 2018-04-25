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
import ChangeScreenCaiDatVaRiengTu from "../../CaiDatVaRiengTu/components/ChangeScreenCaiDatVaRiengTu";
import { styles } from "../../styles/styleCaiDatVaRiengTu";
import { color } from "../../styles/color";
import Header from "../../styles/Header";
export default class CaiDatVaRiengTu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.viewHeader}>
        <View style={styles.viewHeader}>
          <Header
            title="Cài đặt và riêng tư"
            iconName="md-arrow-back"
            iconColor={color.blue}
            manHinhDich="Tabbar"
            navigate={this.props.navigation.navigate}
          />
        </View>
        <View style={styles.viewContent}>
          <ScrollView style={styles.viewMain}>
            <View style={styles.viewTitle}>
              <Text style={styles.titleText}>@duongquang1611</Text>
            </View>
            <ChangeScreenCaiDatVaRiengTu
              textButton="Tài khoản"
              manHinhDich="TaiKhoan"
              navigate={this.props.navigation.navigate}
            />
            <ChangeScreenCaiDatVaRiengTu
              textButton="Riêng tư và bảo mật"
              manHinhDich="RiengTuVaBaoMat"
              navigate={this.props.navigation.navigate}
            />
            <ChangeScreenCaiDatVaRiengTu
              textButton="Thông báo"
              manHinhDich="ThongBao"
              navigate={this.props.navigation.navigate}
            />
            <ChangeScreenCaiDatVaRiengTu
              textButton="Tuỳ chọn nội dung"
              manHinhDich="TuyChonNoiDung"
              navigate={this.props.navigation.navigate}
            />
            <View style={styles.viewTitle}>
              <Text style={styles.titleText}>Chung</Text>
            </View>

            <ChangeScreenCaiDatVaRiengTu
              textButton="Hiển thị và âm thanh"
              manHinhDich="HienThiVaAmThanh"
              navigate={this.props.navigation.navigate}
            />
            <ChangeScreenCaiDatVaRiengTu
              textButton="Sử dụng dữ liệu"
              manHinhDich="SuDungDuLieu"
              navigate={this.props.navigation.navigate}
            />
            <ChangeScreenCaiDatVaRiengTu
              textButton="Khả năng truy cập"
              manHinhDich="KhaNangTruyCap"
              navigate={this.props.navigation.navigate}
            />
            <ChangeScreenCaiDatVaRiengTu
              textButton="Vị trí và proxy"
              manHinhDich="ViTriVaProxy"
              navigate={this.props.navigation.navigate}
            />
            <ChangeScreenCaiDatVaRiengTu
              textButton="Giới thiệu Twitter"
              manHinhDich="GioiThieuTwitter"
              navigate={this.props.navigation.navigate}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
