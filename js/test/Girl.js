/**
 * Created by wtao on 2017/7/6.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    TouchableOpacity
}from 'react-native';
import NavigatorBar from '../common/NavigatorBar';

export default class Girl extends Component {
    renderButton(url){
        return <TouchableOpacity onPress={()=>{
            this.props.navigator.pop()
          }
        }>
            <Image style={{width:20,height:20,margin:5}} source={url}></Image>
        </TouchableOpacity>
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigatorBar
                    title={'Girl'}
                    style={{backgroundColor:'#ee6363'}}
                    leftButton={
                        this.renderButton(require('../../res/images/ic_arrow_back_white_36pt.png'))
                    }
                    rightButton={
                        this.renderButton(require('../../res/images/ic_star.png'))
                    }
                />
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
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    text: {
        fontSize: 22
    }
})