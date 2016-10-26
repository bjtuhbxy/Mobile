'use strict'
import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import {
  StyleSheet,
  View,
  Navigator,
  Text,
  Image,
  Alert,
  Dimensions,
  TouchableOpacity,
  AppRegistry,
} from 'react-native';

import Cggg from './Cggg';

class Service extends Component{

  pushxtxx(){
    const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Cggg',
                component: Cggg,
            })
        }
  }
  pushczsc(){
    const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Cggg',
                component: Cggg,
            })
        }
  }
  pushzcfg(){
    const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Cggg',
                component: Cggg,
            })
        }
  }
  pushcjwt(){
    const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Cggg',
                component: Cggg,
            })
        }
  }
  pushzbqzb(){
    const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Cggg',
                component: Cggg,
            })
        }
  }
  render(){
    var rightButtonConfig = {
    title: 'Next',
    tintColor:'#ff0000',
    handler: function onNext() {
      alert('hello!');
    }
  };
    let _this=this;
    var leftButtonConfig = {
      tintColor:'#ff0000',
      title:'pop',

      handler: function onNext() {
        _this.pop();
      }
    };
    var titleConfig = {
      title: '服务中心',
      tintColor:'#ffffdf',
    };
    var statusBarConfig = {
       tintColor:"#1b90f7",
      //  hidden: true,
    };
    return(
      <View style={styles.container}>
        <NavigationBar
              initialRoute={{name: 'welcome'}}
              title={titleConfig}
              statusBar={statusBarConfig}
              tintColor="#1b90f7"
              // rightButton={rightButtonConfig}
              // leftButton={leftButtonConfig}
              />
        <Image style={styles.titlePhoto}
        source={require('../image/slider.jpg')}
        />
        <View style={styles.clickView}>
          <TouchableOpacity onPress={this.pushxtxx.bind(this)}>
          <View style={styles.clickSubView}>
            <Image
            style={styles.iconClick}
            source={require('../image/xtxx.png')}
            />
            <Text>系统消息</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pushczsc.bind(this)}>
          <View style={styles.clickSubView,styles.clickCenterView}>
            <Image
            style={styles.iconClick}
            source={require('../image/czsc.png')}
            />
            <Text>操作手册</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pushzcfg.bind(this)}>
          <View style={styles.clickSubView}>
            <Image
            style={styles.iconClick}
            source={require('../image/flfg.png')}
            />
            <Text>政策法规</Text>
          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.clickView}>
          <TouchableOpacity onPress={this.pushcjwt.bind(this)}>
          <View style={styles.clickSubView}>
            <Image
            style={styles.iconClick}
            source={require('../image/cjwt.png')}
            />
            <Text>常见问题</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pushzbqzb.bind(this)}>
          <View style={styles.clickSubView,styles.clickCenterView}>
            <Image
            style={styles.iconClick}
            source={require('../image/zbqzb.png')}
            />
            <Text>招标前准备</Text>
          </View>
          </TouchableOpacity>
          <View style={styles.clickSubView}>
          </View>
        </View>



        </View>
    );
  }
  }
  const styles = StyleSheet.create({
  title:{
    fontSize:14,
    paddingLeft:20,
  },
  time:{
    fontSize:12,
    paddingRight:20,
    color:'#22dddd',
  },
  cellView:{
    flex:1,
    justifyContent: 'center',
    flexDirection:'column',
    borderBottomWidth:1,
    borderColor:'#cccccc',
    height:44,
  },
  titlePhoto:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height/4,
    resizeMode:'stretch'
  },
  iconClick:{
    width:Dimensions.get('window').width/8,
    height:Dimensions.get('window').width/8,
    resizeMode:'stretch',
  },
  clickSubView:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffffff',
    width:Dimensions.get('window').width/3,
    height:Dimensions.get('window').width/4,
    borderBottomWidth:1,
    borderColor:'#eeeeee',
  },
  clickCenterView:{
    backgroundColor:'#ffffff',
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:'#eeeeee',
    width:Dimensions.get('window').width/3,
    height:Dimensions.get('window').width/4,
  },
  clickView:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    backgroundColor:'#ffffff',
    height:Dimensions.get('window').width/4,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
export {Service as default}
