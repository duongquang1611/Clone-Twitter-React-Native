import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { color } from "./color";
const styleSignUp = StyleSheet.create({
  viewLogin: {
    flex: 1,
    backgroundColor: color.white
  },
  loginTextTitle: {
    fontWeight: "bold",
    fontSize: color.textSize,
    color: color.black,
    margin: 20,
    marginTop: 50
  },
  loginButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70,
    backgroundColor: color.blue,
    width: "90%",
    height: 40
  },
  textLogin: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold"
  },
  viewButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    // marginTop: 40,
    // marginBottom: 5
    alignItems: "center"
  },
  birdImg: {
    width: 50,
    height: 50,
    margin: 20
  },
  baseText: {
    fontSize: 17,
    color: color.black
  },
  inputText: {
    margin: 20,
    fontSize: 20
  },
  nutDangNhap: {
    fontSize: 17,
    color: color.black,
    color: color.blue
  },
  TextViewEnd: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginLeft: 20,
    marginBottom: 50
  }
});
export { styleSignUp };
