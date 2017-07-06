/**
 * Created by wtao on 2017/7/6.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    RefreshControl,
    TouchableOpacity
}from 'react-native';
import NavigatorBar from '../common/NavigatorBar';
import Toast, {DURATION} from 'react-native-easy-toast'

var data = {
    "result": [
        {
            "name": "wangtao",
            "key": "龟派气功"
        },
        {
            "name": "huangzi",
            "key": "德玛西亚，无可匹敌"
        },
        {
            "name": "盲仔",
            "key": "我用双手成就你的梦想"
        },
        {
            "name": "小炮",
            "key": "我好像射点什么"
        },
        {
            "name": "女枪",
            "key": "我有2把枪，一把就射，一把就啊"
        },
        {
            "name": "日女",
            "key": "黎明仔眼前"
        },
        {
            "name": "亚索",
            "key": "我命由我不由天"
        },
        {
            "name": "蒙多",
            "key": "蒙多笑你是个大娘们"
        },
    ]
}

export default class ListViewTest extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 ? r1 : r2})
        this.state = {
            dataSource: ds.cloneWithRows(data.result),
            onLoad: true
        }
        this.onLoad();
    }

    renderRow(item) {
        return <View style={styles.itemStyle}>
            <TouchableOpacity
                onPress={()=>{
                  this.toast.show("您点击了:"+item.name,DURATION.LENGTH_SHORT);
                }}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.key}</Text>
            </TouchableOpacity>
        </View>
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return <View key={rowID} style={styles.line}>

        </View>
    }

    renderFooter() {
        return <Image style={{width:200,height:100}}
                      source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498118329&di=a4e3f9f76e957d6aa80d951ef33f376a&imgtype=jpg&er=1&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201601%2F28%2F20160128213701_xuhif.gif'}}></Image>
    }

    onLoad() {
        setTimeout(() => {
            this.setState({
                onLoad: false
            })
        }, 2000)
    }

    render() {
        return (
            <View>
                <NavigatorBar
                    title={'ListViewTest'}
                    style={{backgroundColor:'gray'}}
                />
                <ListView dataSource={this.state.dataSource}
                          renderRow={(item)=>this.renderRow(item)}
                          renderSeparator={(sectionID, rowID, adjacentRowHighlighted)=>this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                          renderFooter={()=>this.renderFooter()}
                          refreshControl={
                              <RefreshControl
                                refreshing={this.state.onLoad}
                                onRefresh={()=>this.onLoad()}
                               />
                          }
                />

                <Toast ref={toast=>{this.toast=toast}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemStyle: {
        height: 50
    },
    text: {
        fontSize: 18,
        marginLeft: 15,
        marginTop: 4
    },
    line: {
        height: 1,
        backgroundColor: 'black'
    }
})