import { StyleSheet } from "react-native";
import { color } from "./color";

export const styles = StyleSheet.create({
  baseText: {
    color: "black",
    marginTop: 10,
    fontSize: 20,
    fontFamily: color.fontText
  },
  baseText1: {
    color: "black",
    fontSize: 20,
    fontFamily: color.fontText,
    marginLeft: 5
  },
  nameText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: color.fontText
  },
  smallText: {
    fontFamily: color.fontText,
    color: color.drakGray,
    fontSize: 18
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  viewAllMenu: {
    flex: 1,
    // paddingLeft: 20,
    // marginTop: 20,
    flexDirection: "column",

    backgroundColor: color.lightGray
  },

  viewFollow: {
    flex: 1,
    flexDirection: "row"
  },
  textFollow: {
    fontSize: 14,
    color: color.darkGray,
    marginRight: 5
  },
  viewAvatar: {
    flex: 4,
    padding: 20,
    marginBottom: 0.5,
    justifyContent: "center",
    backgroundColor: color.white
  },
  viewSmallMenu: {
    flex: 4,
    padding: 10,
    marginTop: 0.5,
    justifyContent: "center",
    backgroundColor: color.white
    // marginBottom: 20
  },
  viewCaiDat: {
    flex: 4,
    padding: 20,
    marginTop: 0.5,
    backgroundColor: color.white
  },
  viewScanner: {
    flex: 1,
    // padding: 20,
    marginTop: 0.5,
    flexDirection: "row",
    backgroundColor: color.white
  },
  //   keNgang: {
  //     backgroundColor: color.darkGray,
  //     height: 1
  //   }
  icon: { flexDirection: "row", marginLeft: 5 }
});
