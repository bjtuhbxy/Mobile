/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */



import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

class Mobile extends Component {
    render() {
        return (
                <View style={styles.container}>
                
                <Text style={styles.welcome}>
                Welcome to React Native!
                </Text>
                <Image style={{width:320,height:100,resizeMode:'stretch',backgroundColor:'#000000'}}
                source={{uri:'http://facebook.github.io/react/img/logo_og.png'}}
                >
                </Image>

                </View>
                );
    }
}

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 backgroundColor: '#F5FCCC',
                                 },
                                 welcome: {
                                 fontSize: 20,
                                 textAlign: 'center',
                                 margin: 10,
                                 },
//                                 instructions: {
//                                 textAlign: 'center',
//                                 color: '#000000',
//                                 marginBottom: 5,
//                                 },
                                 });


AppRegistry.registerComponent('Mobile', () => Mobile);
