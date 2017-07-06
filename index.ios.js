/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import NavigatorTest from './js/test/NavigatorTest.js';

export default class wang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tab_popular'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab_popular'}
                        title="最热"
                        selectedTitleStyle={{color:'red'}}
                        renderIcon={() => <Image style={styles.imageStyle} source={require('./res/images/ic_polular.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.imageStyle,{tintColor:'red'}]}  source={require('./res/images/ic_polular.png')}/>}
                        onPress={() => this.setState({ selectedTab: 'tab_popular' })}>
                        <NavigatorTest/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab_treding'}
                        title="趋势"
                        selectedTitleStyle={{color:'red'}}
                        renderIcon={() => <Image style={styles.imageStyle} source={require('./res/images/ic_trending.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.imageStyle,{tintColor:'red'}]} source={require('./res/images/ic_trending.png')}/>}
                        onPress={() => this.setState({ selectedTab: 'tab_treding' })}>
                        <View style={styles.page2}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab_favorite'}
                        title="收藏"
                        selectedTitleStyle={{color:'red'}}
                        renderIcon={() => <Image style={styles.imageStyle} source={require('./res/images/ic_favorite.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.imageStyle,{tintColor:'red'}]}  source={require('./res/images/ic_favorite.png')}/>}
                        onPress={() => this.setState({ selectedTab: 'tab_favorite' })}>
                        <View style={styles.page1}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tab_my'}
                        title="我的"
                        selectedTitleStyle={{color:'red'}}
                        renderIcon={() => <Image style={styles.imageStyle} source={require('./res/images/ic_my.png')} />}
                        renderSelectedIcon={() => <Image style={[styles.imageStyle,{tintColor:'red'}]} source={require('./res/images/ic_my.png')}/>}
                        onPress={() => this.setState({ selectedTab: 'tab_my' })}>
                        <View style={styles.page2}></View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page1:{
        flex:1,
        backgroundColor:'gray'
    },
    page2:{
        flex:1,
        backgroundColor:'blue'
    },
    imageStyle:{
        width:20,
        height:20,
    },
});

AppRegistry.registerComponent('wang', () => wang);
