/**
 * Created by slowsay on 16/6/20.
 */
'use struct';
import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,Image,TouchableHighlight} from 'react-native';

/**
 *@description 组件
 */
import Util from './../../core/utils';

export default class extends Component {
    constructor() {
        super();
        this.state = {
            len: 2,
            width: Util.size.width / 2,
            list: [{n: '林木家具多功能创意白色美式梳妆台 实木梳妆台带收...', price: 7500.0, src: 'pic0.png'},
                {n: '林木家具多功能创意白色美式梳妆台 实木梳妆台带收...', price: 7500.0, src: 'pic1.png'},
                {n: '林木家具多功能创意白色美式梳妆台 实木梳妆台带收...', price: 7500.0, src: 'pic2.png'},
                {n: '林木家具多功能创意白色美式梳妆台 实木梳妆台带收...', price: 7500.0, src: 'pic0.png'},
                {n: '林木家具多功能创意白色美式梳妆台 实木梳妆台带收...', price: 7500.0, src: 'pic1.png'},
                {n: '林木家具多功能创意白色美式梳妆台 实木梳妆台带收...', price: 7500.0, src: 'pic2.png'},
                {n: '林木家具多功能创意白色美式梳妆台 实木梳妆台带收...', price: 7500.0, src: 'pic0.png'},
                {n: '林木家具多功能创意白色美式梳妆台 实木梳妆台带收...', price: 7500.0, src: 'pic1.png'}]
        }
    }

    //输出列表
    listMap(e, i) {
        const _len = 2;
        const _width = Util.size.width / 2;
        const top = Math.floor(i / _len) * (_width + 68);
        const left = (i % _len) == 0 ? (i % _len) * _width : (i % _len) * _width + 4;
        return (
            <View style={[styles.list, {top, left}]} key={i} ref={'n'+e.n}>
                <TouchableHighlight activeOpacity={1} onPress={()=>this.props.getList(i,e.n)}>
                    <View style={styles.listc}>
                        <Image style={styles.pic} source={{uri: e.src}}/>
                        <View style={styles.con}>
                            <Text style={styles.title}>{e.n}</Text>
                            <Text style={styles.price}>{'￥' + e.price}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }

    render() {
        const _list = this.state.list.map((e, i)=>this.listMap(e, i));
        const height = Math.floor(Util.size.width / 2 + 68) * Math.floor(this.state.list.length / 2);
        return (<View style={[styles.box,{height}]}>
            {_list}
        </View>);
    }
}
const styles = StyleSheet.create({
    box: {
        width: Util.size.width,
        backgroundColor: '#ccc'
    },
    list: {
        position: "absolute", width: Util.size.width / 2, height: Util.size.width / 2
    },
    listc: {
        backgroundColor: '#fff'
    },
    title: {color: '#666', margin: 4},
    price: {
        color: '#f0f'
    },
    pic: {
        width: Util.size.width / 2, height: Util.size.width / 2
    },
    con: {
        padding: 4
    }

});