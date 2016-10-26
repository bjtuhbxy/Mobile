'use strict'
import React, {Component} from 'react';
import NavigationBar from 'react-native-navbar';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  Dimensions,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
  AppRegistry,
} from 'react-native';

import Cggg from './Cggg';
const REQ_URL='http://rap.taobao.org/mockjsdata/2227/bizservice/query/list?_tid_=es.gysxxsjlist&pageSize=80&pageNum=1';

class Zzzb extends Component{



  constructor(props) {
    super(props);
    this.state = {
        // selectedTab:'home'
        loaded:true,
        refresh:false,
        isRefreshing:false,
        };
    this.fetchData();

    this.state = {
      movies: new ListView.DataSource(
        {
          rowHasChanged: (row1,row2) => row1 !== row2
        }
      )
    };
  }
  fetchData(){
    if(!this.state.refresh){
      this.setState({
        loaded:false
      });
    }
    fetch(REQ_URL)
    .then(response => response.json())
    .then(responseData =>{
      this.setState({
        loaded:true,
        isRefreshing:false,
        refresh:true,
      });
      this.setState({
        movies:this.state.movies.cloneWithRows(responseData.page.list)
      });
    })
    .done();
  }
  pop(){
        this.props.navigator.pop();
      }
  _onRefresh(){
    this.setState({
      isRefreshing:true,
      refresh:true,
    });
    this.fetchData();
  }
  showMovieDetail(movie){
    this.props.navigator.push({
      title: movie.title,
      component: Cggg,
  });

  console.log(movie.title)
  }
  renderMovieList(movie) {
  return (
    <TouchableOpacity onPress={() => this.showMovieDetail(movie)}>
    <View style={styles.cellView}>
    <View style={{alignItems:'flex-start',}}>
    <Text numberOfLines={1} style={styles.title}>{movie.title}</Text>
    </View>
    <View style={{alignItems:'flex-end',justifyContent:'flex-end',}}>
    <Text numberOfLines={1} style={styles.time}>{movie.tender_sale_deadline}</Text>
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
      title: '采购公告',
      tintColor:'#ffffdf',
    };
    var statusBarConfig = {
       tintColor:"#1b90f7",
      //  hidden: true,
    };
    if (!this.state.loaded) {
      return(
        <View style={styles.container}>
        <NavigationBar
              initialRoute={{name: 'Zzzz'}}
              title={titleConfig}
              statusBar={statusBarConfig}
              tintColor="#1b90f7"
              // rightButton={rightButtonConfig}
              leftButton={leftButtonConfig}
              />
            <View style={styles.btnSelect}>
            <TouchableOpacity style={styles.btnLeft}>
            <Text style={styles.btnText}>区域</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLeft}>
            <Text style={styles.btnText}>项目类型</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLeft}>
            <Text style={styles.btnText}>发布时间</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnLeft}>
            <Text style={styles.btnText}>更多</Text>
            </TouchableOpacity>
            </View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <ActivityIndicator
          animating={!this.state.loaded}
          style={[styles.centering, {height: 80,}]}
          size="large"
          />
        <Text>拼命加载中...</Text>
            </View>
        </View>
      );
    }
    return(
      <View style={styles.container}>
      <NavigationBar
            initialRoute={{name: 'Zzzz'}}
            title={titleConfig}
            statusBar={statusBarConfig}
            tintColor="#1b90f7"
            // rightButton={rightButtonConfig}
            leftButton={leftButtonConfig}
            />
          <View style={styles.btnSelect}>
          <TouchableOpacity style={styles.btnLeft}>
          <Text style={styles.btnText}>区域</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLeft}>
          <Text style={styles.btnText}>项目类型</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLeft}>
          <Text style={styles.btnText}>发布时间</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLeft}>
          <Text style={styles.btnText}>更多</Text>
          </TouchableOpacity>
          </View>
        <View style={{flex:1,}}>
        <ListView
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh.bind(this)}
            tintColor="#0000ff"
            title="玩命加载中..."
            titleColor="#00ffff"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
        }
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
  btnText:{
    color:'#333333',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  btnLeft:{
    justifyContent:'center',
    alignItems:'center',
    width:(Dimensions.get('window').width-3)/4,
    height:Dimensions.get('window').width/12,
    borderRightWidth:1,
    borderBottomWidth:1,
    marginRight:1,
    borderColor:'#cccccc',
  },
  btnSelect:{
    flexDirection:'row',
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').width/12,
  },
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
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
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
export {Zzzb as default}
