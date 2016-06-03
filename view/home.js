/**
 * Created by slowsay on 16/6/3.
 */
import React,{Component} from 'react';
import {
    View,StyleSheet,Image,Text,TouchableHighlight,ScrollView,TextInput
} from 'react-native';
import Util from './../utils'
import SearchBar from 'react-native-search-bar';
import fuzzy from 'fuzzy';


class Searchtool extends Component {
    constructor() {
        super();
        this.state = {msg: '移动流量'};
    }

    _onChangeText(str) {
        this.setState({msg: str});
    }

    render() {
        return (
            <View style={styles.searchbox}>
                <Image style={styles.sweep} source={{uri:'sweep.png'}}/>
                <TextInput style={styles.inputbox} onChangeText={(text)=>this._onChangeText(text)}
                           value={this.state.msg}/>
                <Image style={styles.rightmsg} source={{uri:'msg.png'}}/>
            </View>
        );
    }
}

export default class extends Component {
    constructor() {
        super();
        this.state = {
            msg: '首页'
        }
    };

    _onPressButton() {
        console.log('ok');
    };

    render() {
        return (
            <View style={styles.container}>
                <Searchtool />
                <ScrollView style={styles.con}>
                    <View style={styles.banner}>
                        <Image style={styles.banner} source={{uri:'b0.png'}}/>
                    </View>
                    <TouchableHighlight onPress={this._onPressButton}>
                        <Image style={styles.icon} source={{uri:'0.png'}}/>
                    </TouchableHighlight>
                    <View>
                        <Text>sdfs
                        </Text>
                    </View>
                </ScrollView>
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
        backgroundColor: '#fe4400',
    },
    inputbox: {
        position: 'absolute', left: 50, color: '#fff',fontSize:12,padding:4,paddingLeft:20,
        height: 30, width: Util.size.width - 100, backgroundColor: '#d42d00'
    }
    ,
    searchbox: {
        position: 'absolute',
        width: Util.size.width, height: 60, top: 20
    },
    banner: {
        width: Util.size.width / 665 * 665, height: 204 * Util.size.width / 665, backgroundColor: '#ff0'
    },
    touchbox: {
        width: Util.size.width / 3, height: Util.size.height / 3, borderWidth: Util.pixel, borderColor: '#ccc'
    },
    con: {backgroundColor: '#fff', width: Util.size.width, height: Util.size.height - 60, top: 60},
    rightmsg: {
        position: 'absolute',
        right: 10,
        width: 43 * 29 / 43,
        height: 56 * 29 / 43
    },
    sweep: {
        position: 'absolute',
        left: 10,
        width: 57 * 29 / 57,
        height: 58 * 29 / 57
    },
    icon: {
        width: 58, height: 58
    },
    img: {
        width: 29, height: 29
    }
});