import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";

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
        <Text>Hiển thị và âm thanh</Text>
        <Text>Sử dụng dữ liệu</Text>
        <Text>Khả năng truy cập</Text>
        <Text>Vị trí và proxy</Text>
        <Text>Giới thiệu Twitter</Text>
      </ScrollView>
    );
  }
}
