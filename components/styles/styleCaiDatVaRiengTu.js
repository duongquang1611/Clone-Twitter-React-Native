import { StyleSheet } from "react-native";
import { color } from "./color";

export const styles = StyleSheet.create({
  viewHeader: {
    flex: 1
  },
  viewContent: {
    flex: 9
  },
  viewMain: {
    backgroundColor: "white"
  },
  baseText: {
    fontSize: 27,
    color: "black",
    fontFamily: color.fontText,
    margin: 10
  },
  titleText: {
    fontSize: 30,
    color: color.darkGray,
    fontWeight: "bold",
    margin: 10
  },
  viewTitle: {
    backgroundColor: color.extraLightGray,
    height: 60
  }
});
