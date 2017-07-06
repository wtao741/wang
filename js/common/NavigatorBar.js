/**
 * Created by wtao on 2017/7/6.
 */
import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    StatusBar
}from 'react-native';
const NAVIGATOR_HEIGHT_ANDROID = 50;
const NAVIGATOR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;

const StatusBarShape = {
    backgroundColor: PropTypes.string,
    barStyle: PropTypes.oneOf('default', 'light-content'),
    hidden: PropTypes.bool
}

export default class NavigatorBar extends Component {

    static propTypes = {
        styles: View.propTypes.style,
        title: PropTypes.string,
        titleView: PropTypes.element,
        hide: PropTypes.bool,
        leftButton: PropTypes.element,
        rightButton: PropTypes.element,
        statusBar: PropTypes.shape(StatusBarShape)
    }

    static defaultProps = {
        statusBar: {
            barStyle: 'light-content',
            hidden: false
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            hide: false
        }
    }

    render() {
        let statusBar = <View style={styles.statusBar}>
            <StatusBar {...this.props.statusBar}/>
        </View>
        let titleView = this.props.titleView ? this.props.titleView :
            <Text style={styles.title}>{this.props.title}</Text>
        let content = <View style={styles.bar}>
            {this.props.leftButton}
            <View style={styles.titleViewContainer}>
                {titleView}
            </View>
            {this.props.rightButton}
        </View>

        return (
            <View style={[styles.container,this.props.style]}>
                {statusBar}
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {},
    text: {
        fontSize: 22
    },
    bar: {
        height: Platform.OS === 'ios' ? NAVIGATOR_HEIGHT_IOS : NAVIGATOR_HEIGHT_ANDROID,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    titleViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0,
    },
    title: {
        fontSize: 22,
        color: 'white'
    },
    statusBar: {
        height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,
    }
})