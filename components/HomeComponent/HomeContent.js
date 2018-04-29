import React, { Component } from "react";
import {
  Text,
  View,
  Alert,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { styles } from "./HomeContentStyle";
import { color } from "../styles/color";
export default class HomeContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={styles.ItemFlatList}>
          <View style={styles.ViewAvatar}>
            <Image
              source={{ uri: this.props.item.imageUrl }}
              style={styles.ViewImageAvatar}
            />
          </View>
          <View style={styles.ViewBody}>
            <View style={styles.TenVaNoiDung}>
              <Text style={styles.TextName}>{this.props.item.name}</Text>
              <Text>{this.props.item.status}</Text>
            </View>
            <View style={styles.ViewLike}>
              <View style={styles.ViewInLike}>
                <TouchableOpacity>
                  <Ionicons
                    name="ios-chatbubbles-outline"
                    size={25}
                    color={color.darkGray}
                    // style={{ color: color.blue }}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.ViewInLike}>
                <TouchableOpacity>
                  <Ionicons
                    name="ios-refresh-outline"
                    size={25}
                    color={color.darkGray}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.ViewInLike}>
                <TouchableOpacity>
                  <Ionicons
                    name="ios-heart-outline"
                    size={25}
                    color={color.darkGray}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.ViewInLike}>
                <TouchableOpacity>
                  <Ionicons
                    name="ios-share-outline"
                    size={25}
                    color={color.darkGray}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: color.lightGray,
            height: 1
          }}
        />
      </View>
    );
  }
}
