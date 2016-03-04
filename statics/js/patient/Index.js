/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator,
} from 'react-native';

import Home from "./Home"
import DoctorMainMessage from '../me/doctorMainMessage'
import ViewPager from 'react-native-scrollable-tab-view'
//import Tabbar from '../Tabbar';
import BottomTabBar from '../BottomTabBar';
import Schedule from '../cal/Schedule';
import Release from '../cal/Release';
import ComponentTest from '../cal/ComponentTest';

class nuanxin extends Component {

  render() {
    return (
        <ViewPager tabBarPosition='bottom'  renderTabBar={()=><BottomTabBar />}>
          <View tabLabel='one'>
            <Home mainNavigator={this.props.mainNavigator}/>
          </View>
          <View tabLabel='two'>
            <Schedule navigator={this.props.mainNavigator} />
          </View>
          <View tabLabel='three'>
            <Release navigator={this.props.mainNavigator} />
          </View>
          <View tabLabel='four'>
            <ComponentTest navigator={this.props.mainNavigator} />
          </View>
          <View tabLabel='five'>
            <DoctorMainMessage navigator={this.props.mainNavigator}/>
          </View>
        </ViewPager>

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

  export default nuanxin;
