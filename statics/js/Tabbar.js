'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TabBarIOS,
  NavigatorIOS,
} from 'react-native';

import Home from "./patient/Home"
import DoctorMainMessage from './me/doctorMainMessage'
import ViewPager from 'react-native-scrollable-tab-view'
import Schedule from './cal/Schedule';
import Release from './cal/Release';
import ComponentTest from './cal/ComponentTest';

class Tabbar extends Component {
	getInitialState() {
		return {
			selectedTab:'病人'
		}
	}

	changeTab(tabName) {
		this.setState({
			selectedTab:tabName
		});
	}

	_renderContent: function(color: string, pageText: string, num?: number) {
		return(
	  <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
		);
	}
		render () {
		return (
			<TabBarIOS> 
				<TabBarIOS.Item 
					title = '病人'
					icon = {require('../images/tabbar_icons/patient.png')}
					onPress = {() => this.changeTab('Home')}
					selected = {this.state.selectedTab === 'Home'} >

				    <NavigatorIOS 
				    	style = {styles.container}
				    	initialRoute = {{
				    		title: '病人',
				    		Component: Home,
				    	}}/>
				     {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
				 </TabBarIOS.Item>

				 <TabBarIOS.Item 
					title = '日程'
					icon = {require('../images/tabbar_icons/normal_cal.png')}
					onPress = {() => this.changeTab('日程')}
					selected = {this.state.selectedTab === '日程'} >

				    <NavigatorIOS 
				    	style = {styles.container}
				    	initialRoute = {{
				    		title: '日程',
				    		Component: Schedule,
				    	}}/>
				 </TabBarIOS.Item>

				 <TabBarIOS.Item 
					title = '发布'
					icon = {require('../images/tabbar_icons/normal_editor.png')}
					onPress = {() => this.changeTab('发布')}
					selected = {this.state.selectedTab === '发布'} >

				    <NavigatorIOS 
				    	style = {styles.container}
				    	initialRoute = {{
				    		title: '发布',
				    		Component: Release,
				    	}}/>
				 </TabBarIOS.Item>

				 <TabBarIOS.Item 
					title = '患教'
					icon = {require('../images/tabbar_icons/normal_patient.png')}
					onPress = {() => this.changeTab('患教')}
					selected = {this.state.selectedTab === '患教'} >

				    <NavigatorIOS 
				    	style = {styles.container}
				    	initialRoute = {{
				    		title: '患教',
				    		Component: ComponentTest,
				    	}}/>
				 </TabBarIOS.Item>

				 <TabBarIOS.Item 
					title = '我的'
					icon = {require('../images/tabbar_icons/normal_person.png')}
					onPress = {() => this.changeTab('我的')}
					selected = {this.state.selectedTab === '我的'} >

				    <NavigatorIOS 
				    	style = {styles.container}
				    	initialRoute = {{
				    		title: '我的',
				    		Component: DoctorMainMessage,
				    	}}/>
				 </TabBarIOS.Item>
				 
			</TabBarIOS>
				
		);
	}
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'black',
	},

});

export default Tabbar ;