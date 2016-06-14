/**
 * Created by slowsay on 16/6/3.
 */
'use strict';
import React,{Component} from 'react';
import {
    Image,StyleSheet,Text,TouchableHighlight,LayoutAnimation,ScrollView,CameraRoll,View
} from 'react-native';
import Util from './../../core/utils';


export default class extends Component {
    constructor() {
        super();
        this.state = {
            msg: '微淘',
            enter: false

        }
    }

    componentDidMount() {
        this.setState({enter: true});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.msg}</Text>
            </View>
        );
    }
}
/**
 * @description 样式定义
 *
 */
const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    img: {
        width: 100,
        height: 140,
        margin: 2
    },
    icon: {
        width: 29, height: 29
    }
});