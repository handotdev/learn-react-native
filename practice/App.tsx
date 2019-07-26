import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hi!</Text>
      </View>
    );
  }
}