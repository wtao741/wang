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
import Girl from './Girl';
import NavigatorBar from '../common/NavigatorBar';

export default class Boy extends Component{
    constructor(props){
        super(props)
        this.state = {
            word:''
        }
    }

    render(){
        return (
            <View style={styles.container}>

                <NavigatorBar
                    title={'Boy'}
                    style={{backgroundColor:'red'}}/>

                <Text style={styles.text}>I am a good boy!</Text>
                <Text style={styles.text} onPress={()=>{
                    this.props.navigator.push({
                        component:Girl,
                        params:{
                            word:'一支玫瑰',  //在下一个页面可以通过this.props.word拿到值
                            onCallBack:(word)=>{
                                this.setState({
                                    word:word
                                })
                            }
                        }
                    })
                }}>送女孩一支玫瑰</Text>
                <Text style={styles.text}>女孩送我礼物:{this.state.word}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        fontSize:22
    }
})