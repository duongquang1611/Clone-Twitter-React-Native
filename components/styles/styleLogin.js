import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { color } from "./color";
const styleLogin = StyleSheet.create({
  viewLogin: {
    flex: 1,
    backgroundColor: "white"
  },
  loginTextTitle: {
    fontWeight: "bold",
    fontSize: 35,
    color: color.black,
    fontFamily: color.fontText,
    margin: 10
  },
  loginTextHint: {
    color: color.darkGray,
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10
  },
  //   inputBao: {
  //     borderColor: "red"
  //   },
  inputLogin: {
    height: 60,
    marginLeft: 10,
    fontSize: 20,
    color: color.black
  },
  loginButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70,
    backgroundColor: color.blue,
    width: 150,
    height: 40
  },
  textLogin: {
    color: color.white,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  viewButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 30,
    marginBottom: 50
  },
  forgot: {
    textAlign: "center",
    color: color.darkGray,
    fontSize: 20,
    marginTop: 30
  },
  viewLogo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  textInLogoTitle: {
    margin: 5,
    marginRight: "10%",
    fontWeight: "bold",
    color: color.blue,
    textAlign: "center",
    fontSize: 20
  },
  imageInLogoTitle: {
    width: 40,
    height: 40
  }
});
export { styleLogin };
