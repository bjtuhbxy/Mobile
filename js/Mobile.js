'use strict'
import React, {Component} from 'react';
import NavigationBar from 'react-native-navbar';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  ListView,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  AppRegistry,
} from 'react-native';

import Cggg from './Cggg';
import Zzzb from './Zzzb';

class Mobile extends Component{
  configureScene(route){
      //淡入淡出效果
      return Navigator.SceneConfigs.FloatFromRight;
    }


  constructor(props) {
    super(props);
    this.state = {
        // selectedTab:'home'
        };
    let movies = [
      {title:"中国移动开发数据比选公告1中国移动开发数据比选公告1中国移动开发数据比选公告1",time:"还有30天23小时57分44秒"},
      {title:"中国移动开发数据比选公告2",time:"还有30天23小时57分44秒"},
      {title:"中国移动开发数据比选公告3",time:"还有30天23小时57分44秒"},
      {title:"中国移动开发数据比选公告4",time:"还有30天23小时57分44秒"},
      {title:"中国移动开发数据比选公告5",time:"还有30天23小时57分44秒"},
      {title:"中国移动开发数据比选公告6",time:"还有30天23小时57分44秒"},
      {title:"中国移动开发数据比选公告7",time:"还有30天23小时57分44秒"},
      {title:"中国移动开发数据比选公告8",time:"还有30天23小时57分44秒"},
      {title:"中国移动开发数据比选公告9",time:"还有30天23小时57分44秒"},
      {title:"中国移动开发数据比选公告10",time:"还有30天23小时57分44秒"},
    ];
    let dataSource = new ListView.DataSource(
      {
        rowHasChanged: (row1,row2) => row1 !== row2
      }
    );
    this.state = {
      movies: dataSource.cloneWithRows(movies)
    };
    // fetchData(){
    //   fetch(url)
    //     .then(response => response.json)
    //     .then( )
    // }
  }
  pushzzzb(){
    const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Zzzb',
                component: Zzzb,
            })
        }
  }
  pushjjkb(){
    const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Cggg',
                component: Cggg,
            })
        }
  }
  pushzzgs(){
    const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Cggg',
                component: Cggg,
            })
        }
  }
  renderMovieList(movie) {
  return (
    <TouchableOpacity>
    <View style={styles.cellView}>
    <View style={{alignItems:'flex-start',}}>
    <Text numberOfLines={1} style={styles.title}>{movie.title}</Text>
    </View>
    <View style={{alignItems:'flex-end',justifyContent:'flex-end',}}>
    <Text numberOfLines={1} style={styles.time}>{movie.time}</Text>
    </View>
    </View>
    </TouchableOpacity>
  );}

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
      title: '招标大厅',
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
              tintColor="#1b90f7"/>
        <Image style={styles.titlePhoto}
        source={require('../image/slider.jpg')}
        // source={{uri:'http://pica.nipic.com/2007-12-07/20071271545492_2.jpg'}}
        // source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
        />
        <View style={styles.clickView}>
        <TouchableOpacity onPress={this.pushzzzb.bind(this)}>
          <View style={styles.clickSubView}>
            <Image
            style={styles.iconClick}
            source={require('../image/zzzb.png')}
            />
            <Text>正在招标</Text>
            </View>
            </TouchableOpacity>
          <TouchableOpacity onPress={this.pushjjkb.bind(this)}>
          <View style={styles.clickSubView,styles.clickCenterView}>
            <Image
            style={styles.iconClick}
            source={require('../image/jjkb.png')}
            />
            <Text>即将开标</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pushzzgs.bind(this)}>
          <View style={styles.clickSubView}>
            <Image
            style={styles.iconClick}
            source={require('../image/zzgs.png')}
            />
            <Text>正在公示</Text>
          </View>
          </TouchableOpacity>
        </View>

        <View style={{flex:1,}}>
        <ListView
          backgroundColor="rgba(255, 255, 255, 0.5)"
          dataSource = {this.state.movies}
          renderRow={this.renderMovieList.bind(this)}
          />
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
export {Mobile as default}
