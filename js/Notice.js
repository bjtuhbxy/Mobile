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
  AppRegistry,
} from 'react-native';

import Cggg from './Cggg';

class Notice extends Component{
  constructor(props) {
    super(props);
    let movies = [
      {title:"中国移动开发数据招采公告10",time:"2016-08-15 14:54:20"},
      {title:"中国移动开发数据招采公告9",time:"2016-08-15 14:54:20"},
      {title:"中国移动开发数据招采公告8",time:"2016-08-15 14:54:20"},
      {title:"中国移动开发数据招采公告7",time:"2016-08-15 14:54:20"},
      {title:"中国移动开发数据招采公告6",time:"2016-08-15 14:54:20"},
      {title:"中国移动开发数据招采公告5",time:"2016-08-15 14:54:20"},
      {title:"中国移动开发数据招采公告4",time:"2016-08-15 14:54:20"},
      {title:"中国移动开发数据招采公告3",time:"2016-08-15 14:54:20"},
      {title:"中国移动开发数据招采公告2",time:"2016-08-15 14:54:20"},
      {title:"中国移动开发数据招采公告1",time:"2016-08-15 14:54:20"},
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
  pushcggg(){
    const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'Cggg',
                component: Cggg,
            })
        }
  }
  pushzgys(){
    const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Cggg',
                component: Cggg,
            })
        }
  }
  pushjggs(){
    const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'Cggg',
                component: Cggg,
            })
        }
  }
  pushgysxx(){
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
      title: '招采公告',
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
        <TouchableOpacity onPress={this.pushcggg.bind(this)}>
        <View style={styles.clickSubView}>
          <Image
          style={styles.iconClick}
          source={require('../image/zcgg.png')}
          />
          <Text>采购公告</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.pushzgys.bind(this)}>
        <View style={styles.clickSubView}>
          <Image
          style={styles.iconClick}
          source={require('../image/zgys.png')}
          />
          <Text>资格预审</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.pushjggs.bind(this)}>
        <View style={styles.clickSubView}>
          <Image
          style={styles.iconClick}
          source={require('../image/jggs.png')}
          />
          <Text>结果公示</Text>
          </View>
        </TouchableOpacity>
          <TouchableOpacity onPress={this.pushgysxx.bind(this)}>
          <View style={styles.clickSubView}>
            <Image
            style={styles.iconClick}
            source={require('../image/gysxx.png')}
            />
            <Text>供应商信息</Text>
          </View>
          </TouchableOpacity>
        </View>

        <View style={{flex:1,}}>
        <ListView
          backgroundColor="rgba(255, 255, 255, 0.5)"
          dataSource = {this.state.movies}
          renderRow={
            movie =>
            <View style={styles.cellView}>
            <View style={{alignItems:'flex-start',}}>
            <Text numberOfLines={1} style={styles.title}>{movie.title}</Text>
            </View>
            <View style={{alignItems:'flex-end',justifyContent:'flex-end',}}>
            <Text numberOfLines={1} style={styles.time}>{movie.time}</Text>
            </View>
            </View>
          }
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
    width:(Dimensions.get('window').width)/4,
    height:Dimensions.get('window').width/4,
    borderBottomWidth:1,
    borderRightWidth:1,
    marginRight:1,
    borderColor:'#eeeeee',
  },
  clickRightView:{
    backgroundColor:'#ffffff',
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:1,
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
export {Notice as default}
