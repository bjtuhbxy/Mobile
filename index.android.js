/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 var NavigationBar = require('react-native-navbar');
 import TabNavigator from 'react-native-tab-navigator';
 import {
   AppRegistry,
   StyleSheet,
   Navigator,
   Text,
   Image,
   View
 } from 'react-native';

 import Home from './js/Home';

 class Mobile extends Component {
   render() {
     let defaultName = 'Home';
     let defaultComponent = Home;
     return (
       <Navigator
         initialRoute={{ name: defaultName, component: defaultComponent }}
         configureScene={(route) => {
           return Navigator.SceneConfigs.FloatFromRight;
         }}
         renderScene={(route, navigator) => {
           let Component = route.component;
           return <Component {...route.params} navigator={navigator} />
         }} />
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
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

 AppRegistry.registerComponent('Mobile', () => Mobile);
