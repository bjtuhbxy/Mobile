'use strict'
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  AppRegistry,
} from 'react-native';

import Login from './Login';
import Logout from './Logout';

class Me extends Component{
  render(){
    if (true) {
      return(
        <Logout></Logout>
      );
    }
    return(
      <Login></Login>
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
export {Me as default}
