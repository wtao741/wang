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
import HttpUtil from '../common/HttpUtil';

export default class FetchTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: ''
        }
    }

    onGet(url) {
        // fetch(url)
        //     .then(response => response.json())
        //     .then(result => {
        //         this.setState({
        //             result: JSON.stringify(result)
        //         })
        //     })
        //     .catch(error => {
        //         this.setState({
        //             result: 'error:'+JSON.stringify(error)
        //         })
        //     })
        HttpUtil.get(url)
            .then(result => {
                this.setState({
                    result: JSON.stringify(result)
                })
            })
            .catch(error => {
                this.setState({
                    result: 'error:' + JSON.stringify(error)
                })
            })
    }

    onSubmit(url, data) {
        // fetch(url, {
        //     method: 'post',
        //     header: {
        //         'accept': 'application/json',
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(response => response.json())
        //     .then(result => this.setState({
        //         result: JSON.stringify(result)
        //     }))
        //     .catch(error => this.setState({
        //         result: 'error:'+JSON.stringify(error)
        //     }))

        HttpUtil.post(url,data)
            .then(result => this.setState({
                result: JSON.stringify(result)
            }))
            .catch(error => this.setState({
                result: 'error:'+JSON.stringify(error)
            }))
    }

    render() {
        return (
            <View>
                <NavigatorBar
                    title={'FetchTest'}
                    style={{backgroundColor:'#ff8103'}}
                />

                <Text style={styles.tips}
                      onPress={()=>this.onGet('http://rap.taobao.org/mockjsdata/11793/test')}>获取数据</Text>
                <Text style={styles.tips} onPress={()=>
                this.onSubmit('http://rap.taobao.org/mockjsdata/11793/submit',
                   {userName:'小明',
                   password:'123456'})}>提交数据</Text>
                <Text>返回的结果：{this.state.result}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tips: {
        fontSize: 22,
        marginTop:20
    }
})