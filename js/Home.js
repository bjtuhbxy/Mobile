
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Mobile from './Mobile';
import Notice from './Notice';
import Service from './Service';
import Me from './Me';
import Cggg from './Cggg';

class Home extends Component{
  constructor(props) {
        super(props);
        this.state = {
        selectedTab:'home'
        };
    }
  goBack(){
    this.props.navigator.push({name:"default"});
  }
  pop(){
    this.props.navigator.pop();
  }
  _pressButton(){
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
    render() {
      return (
        <TabNavigator>
        <TabNavigator.Item
        selected={this.state.selectedTab === 'home'}
        title="招标大厅"
        renderIcon={() => <Image source={require("../imgs/home.png")} style={styles.iconStyle}/>}
        renderSelectedIcon={() => <Image source={require("../imgs/homes.png")} style={styles.iconStyle}/>}
        onPress={() => this.setState({ selectedTab: 'home' })}
        >
        <Mobile {...this.props}></Mobile>
        </TabNavigator.Item>
        <TabNavigator.Item
        title="招采公告"
        selected={this.state.selectedTab === 'user'}
        onPress={() => this.setState({ selectedTab: 'user' })}
        >
        <Notice {...this.props}></Notice>
        </TabNavigator.Item>
        <TabNavigator.Item
        title="服务中心"
        selected={this.state.selectedTab === 'set'}
        onPress={() => this.setState({ selectedTab: 'set' })}
        >
        <Service {...this.props}></Service>
        </TabNavigator.Item>
        <TabNavigator.Item
        title="我的"
        selected={this.state.selectedTab === 'me'}
        onPress={() => this.setState({ selectedTab: 'me' })}
        >
        <Me {...this.props}></Me>
        </TabNavigator.Item>
    </TabNavigator>
      );
    }
}

  var WelcomeView = React.createClass({
      onPressFeed() {
          this.props.navigator.push({name: 'feed'});
      },


      render() {
         console.log("welcome view loaded...")
          return (
              <View style={styles.container}>
                  <Text style={styles.welcome} onPress={this.onPressFeed} >
                      欢迎你的到来
                  </Text>
              </View>
          );
      }

  });

const styles = StyleSheet.create({
  iconStyle:{
       width:26,
       height:26,
   },
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

export {Home as default}
