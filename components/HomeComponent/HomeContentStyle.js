import { StyleSheet } from "react-native";
import { color } from "../styles/color";
export const styles = StyleSheet.create({
  ItemFlatList: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white"
  },
  ViewAvatar: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  ViewBody: {
    flex: 8,
    flexDirection: "column"
  },
  TenVaNoiDung: {
    flex: 9,
    flexDirection: "column"
  },
  ViewLike: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10
  },
  ViewInLike: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  ViewImageAvatar: {
    height: 55,
    width: 55,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 30
  },
  TextName: {
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 15,
    marginBottom: 10,
    fontFamily: color.fontText,
    color: "black"
  }
});
