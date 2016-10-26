'use strict'
import React, {Component} from 'react';
import NavigationBar from 'react-native-navbar';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  AppRegistry,
  TouchableOpacity,
} from 'react-native';

class Logout extends Component{
  pushwdzgysxm(){
    alert('您确定要查看资格预审项目吗？');
  }
  render(){
    var titleConfig = {
      title: '我的',
      tintColor:'#ffffdf',
    };
    return(
      <View style={styles.container}>

        <NavigationBar
          initialRoute={{name: 'Logout'}}
          title={titleConfig}
          // statusBar={statusBarConfig}
          tintColor="#1b90f7"/>

      <View style={styles.user}>
      <View style={styles.icon}>
      <Image style={{width:50,height:50,borderRadius:25,backgroundColor:'#333333',resizeMode:'stretch'}}
      source={require('../image/xiaoren.png')}
      ></Image>
      </View>
      <View style={styles.userInfo}>
      <Text>帐号：nbyg</Text>
      <Text>公司：内蒙古</Text>
      <Text>类型：内部员工</Text>
      </View>
      </View>
      <TouchableOpacity style={styles.wdxm}>
      <Text>我的项目</Text>
      <View>
      <Image
      style={styles.more}
      source={require('../image/more.png')}
      />
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wdzgysxm}
      onPress={this.pushwdzgysxm.bind(this)}>
      <Text>我的资格预审项目</Text>
      <View>
      <Image
      style={styles.more}
      source={require('../image/more.png')}
      />
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.set}>
      <Text>设置</Text>
      <View>
      <Image
      style={styles.more}
      source={require('../image/more.png')}
      />
      </View>
      </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  more:{
    width:20,
    height:20,
    marginRight:20,
  },
  icon: {
    width:50,
    height:50,
  },
  userInfo:{
    flex:1,
    height:50,
    marginLeft:5,
  },
  user: {
    flexDirection:'row',
    alignItems:'center',
    marginLeft:5,
    backgroundColor:'#eaeaea',
    width:Dimensions.get('window').width,
    height:60,
  },
  wdxm: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingLeft:20,
    backgroundColor:'#eaeaea',
    width:Dimensions.get('window').width,
    height:44,
    marginTop:10,
    borderBottomWidth:1,
    borderColor:'#cccccc',
  },
  wdzgysxm:{
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:20,
    backgroundColor:'#eaeaea',
    width:Dimensions.get('window').width,
    height:44,
  },
  set:{
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:20,
    backgroundColor:'#eaeaea',
    marginTop:10,
    width:Dimensions.get('window').width,
    height:44,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#cfcfcf',
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
export {Logout as default}
