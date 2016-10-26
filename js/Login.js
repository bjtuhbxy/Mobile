'use strict'
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  AppRegistry,
} from 'react-native';

class Login extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>
          这里是Login！
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ff00',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// module.exports = Home;
export {Login as default}
