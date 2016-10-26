'use strict'
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  AppRegistry,
} from 'react-native';

class Cggg extends Component{
  pop(){
        this.props.navigator.pop();
        // alert("啊啊啊");
      }
  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={this.pop.bind(this)}>
        <Text style={styles.welcome}>
          这里是我的！
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:20,
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
export {Cggg as default}
