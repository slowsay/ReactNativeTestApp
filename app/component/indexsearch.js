/**
 * Created by slowsay on 16/6/15.
 */
'use strict';
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,Image,
    View,TextInput,TouchableHighlight
} from 'react-native';
/**
 *@description 组件
 */
import Util from './../core/utils';
import Searchbar from './../component/search';
//搜索框
export default class extends Component {
    constructor() {
        super();
        this.state = {
            msg: '移动流量'
        };
    }

    _onChangeText(str) {
        Util.nslog(str);
        this.setState({msg: str});
    }

    _onFocus() {
        const {navigator}=this.props;
        navigator.push({
            name: '搜索',
            component: Searchbar
        })
    }

    render() {
        return (
            <View style={styles.searchbox}>
                <Image style={styles.sweep} source={{uri:'sweep.png'}}/>
                <TextInput style={styles.inputbox} onFocus={()=>this._onFocus()}
                           onChangeText={(text)=>this._onChangeText(text)}
                           value={this.state.msg}/>
                <TouchableHighlight activeOpacity={1} onPress={()=>this.props.showmsg()}>
                    <Image style={styles.rightmsg} source={{uri:'msg.png'}}/>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    searchbox: {
        position: 'absolute', backgroundColor: '#ff4400',
        width: Util.size.width, height: 60, paddingTop: 20
    },
    inputbox: {
        position: 'absolute', left: 50, color: '#fff', fontSize: 12, padding: 4, paddingLeft: 20,
        height: 30, width: Util.size.width - 100, backgroundColor: '#d42d00'
    },
    sweep: {
        position: 'absolute',
        left: 10,
        width: 57 * 29 / 57,
        height: 58 * 29 / 57
    },
    rightmsg: {
        position: 'absolute',
        right: 10,
        width: 43 * 29 / 43,
        height: 56 * 29 / 43
    }
});