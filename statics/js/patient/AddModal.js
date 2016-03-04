'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ListView,
  TextInput,
  Alert,
 TouchableHighlight,
  ScrollView,
} from 'react-native';
class AddModal extends Component{
  constructor(){
    super();
};

  handleClickModal(name){
    if (name ==='zd') { 
      this.props.close();
      this.props.mainNavigator.push({
        name:'addOrder',
      });
    }
    else if(name === 'date'){
           this.props.close();
           this.props.mainNavigator.push({
            name: 'DoctorRecord',
          });
    }
    else if(name === 'sc'){
         this.props.close();
          this.props.mainNavigator.push({
            name: 'WriteTable',
          });
    }
   
  };

  render(){
    return  (
          <View style={styles.container}>
            <TouchableHighlight onPress={()=>this.handleClickModal('zd')} style={{flex:1}} ><View  style={styles.cheack}><Text style={styles.txtColor}>添加服药</Text></View></TouchableHighlight>
            <TouchableHighlight onPress={()=>this.handleClickModal('date')}style={{flex:1}}><View  style={styles.cheack}><Text  style={styles.txtColor}>添加医嘱</Text></View></TouchableHighlight>
            <TouchableHighlight onPress={()=>this.handleClickModal('sc')} style={{flex:1}} ><View  style={[styles.cheack,{ borderBottomWidth:1,}]}><Text style={styles.txtColor}>填写量表</Text></View></TouchableHighlight>
          </View>
      );
};
};


const styles = StyleSheet.create({
    container:{
    flexDirection: 'column', 
    flex:1,
    },
    txtColor:{
        color:'white',
    },
    cheack:{
     flex:1,
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center',
      borderBottomWidth:1, 
      backgroundColor:'rgba(255,255,255, 0.7)',   
    },
});


export default AddModal;
