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
import ChangeScreen from "../../ChangeScreen";

export default class CaiDatVaRiengTu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        <Text>@duongquang1611</Text>
        <ChangeScreen textButton="Tài khoản" manHinhDich="TaiKhoan" />
        <ChangeScreen
          textButton="Riêng tư và bảo mật"
          manHinhDich="RiengTuVaBaoMat"
        />
        <ChangeScreen textButton="Thông báo" manHinhDich="ThongBao" />
        <ChangeScreen
          textButton="Tuỳ chọn nội dung"
          manHinhDich="TuyChonNoiDung"
        />

        <Text>Chung</Text>
        <ChangeScreen
          textButton="Hiển thị và âm thanh"
          manHinhDich="HienThiVaAmThanh"
        />
        <ChangeScreen textButton="Sử dụng dữ liệu" manHinhDich="SuDungDuLieu" />
        <ChangeScreen
          textButton="Khả năng truy cập"
          manHinhDich="KhaNangTruyCap"
        />
        <ChangeScreen textButton="Vị trí và proxy" manHinhDich="ViTriVaProxy" />
        <ChangeScreen
          textButton="Giới thiệu Twitter"
          manHinhDich="GioiThieuTwitter"
        />
      </ScrollView>
    );
  }
}
