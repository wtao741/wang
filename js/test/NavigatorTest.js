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
import Boy from './Boy';

export default class NavigatorTest extends Component{
   render() {
       return(
           <Navigator
             initialRoute={{component:Boy}}
             renderScene={(route,navigator)=>{
                 let Component = route.component;
                 return <Component navigator={navigator} {...route.params}/>
                 //navigator={navigator} 传给下级页面
             }}
           />
       )
   }
}