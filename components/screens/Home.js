import React, { Component } from "react";
import {
  Platform,
  Alert,
  StyleSheet,
  Text,
  View,
  FlatList
} from "react-native";
import HomeContent from "../HomeComponent/HomeContent";
import HomeData from "../HomeComponent/HomeData";
export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <FlatList
          data={HomeData}
          renderItem={({ item, index }) => {
            return <HomeContent item={item} index={index} />;
          }}
        />
      </View>
    );
  }
}
