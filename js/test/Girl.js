/**
 * Created by wtao on 2017/7/6.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator
}from 'react-native';

export default class Girl extends Component{
   render() {
       return(
           <View style={styles.container}>
               <Text style={styles.text}>I am a good girl!</Text>
               <Text style={styles.text}>我收到男孩送我的礼物:{this.props.word}</Text>
               <Text style={styles.text} onPress={()=>{
                   this.props.onCallBack('一盒巧克力'),
                   this.props.navigator.pop()
               }}>我要送男孩一盒巧克力</Text>
           </View>
       )
   }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    text:{
        fontSize:22
    }
})