/**
 * Created by slowsay on 16/6/3.
 */
import React,{Component} from 'react';
import {
    View,StyleSheet,Image,Text,TouchableHighlight
} from 'react-native';
import Util from './../../core/utils';

export default class extends Component {
    constructor() {
        super();
        this.state = {
            msg: '社区'
        }
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});