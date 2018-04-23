/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { LoginStack } from "./components/Route";
import { Drawer } from "./components/Route";
import { StackNavigator } from "react-navigation";

export default class App extends Component {
  render() {
    return <Drawer />;
  }
}
