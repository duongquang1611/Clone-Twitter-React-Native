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
    fontSize: 20,
    color: "black",
    fontFamily: color.fontText,
    margin: 15,
    marginRight: 20
  },
  titleText: {
    fontSize: 20,
    color: color.darkGray,
    fontWeight: "bold",
    margin: 15,
    marginRight: 20
  },
  viewTitle: {
    justifyContent: "center",
    backgroundColor: color.extraLightGray,
    height: 55
  }
});
