/**
 * Created by slowsay on 16/6/15.
 */
import React,{Component} from 'react';
import {View,StyleSheet,Image,Text,TouchableHighlight} from 'react-native';
import Util from './../core/utils';
//功能菜单列表
export  default class  extends Component {
    constructor() {
        super();
        this.state = {
            len: 5,
            width: Util.size.width / 5,
            list: [{n: '天猫', src: '0.png'}, {n: '聚划算', src: '1.png'}, {n: '天猫国际', src: '2.png'}, {
                n: '外卖',
                src: '3.png'
            }, {n: '天猫超市', src: '4.png'}, {n: '充值中心', src: '5.png'}, {n: '阿里旅行', src: '6.png'}, {
                n: '领金币',
                src: '7.png'
            }, {n: '到家', src: '8.png'}, {n: '分类', src: '9.png'}]
        }
    }

    listMap(e, i) {
        let top = Math.floor(i / this.state.len) * this.state.width;
        let left = (i % this.state.len) * this.state.width;
        return (
            <View style={[styles.navboxlist, {top, left}]} key={i} ref={'n'+e.n}>
                <TouchableHighlight activeOpacity={1} onPress={()=>this.props.getIcon(i,e.n)}>
                    <View style={styles.navboxc}>
                        <Image style={styles.navicon} source={{uri: e.src}}/>
                        <Text style={styles.navtitle}>{e.n}</Text>
                    </View>
                </TouchableHighlight>
            </View>

        )
    }

    render() {
        const _list = this.state.list.map((e, i)=>this.listMap(e, i))
        return <View style={styles.navbox}>
            {_list}
        </View>
    }
}

const styles = StyleSheet.create({
    navbox: {width: Util.size.width, height: Math.floor(Util.size.width / 5) * 2},
    navboxlist: {
        position: "absolute",
        width: Util.size.width / 5,
        height: Util.size.width / 5
    },
    navboxc: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Util.size.width / 5,
        height: Util.size.width / 5, backgroundColor: "#fff"
    },
    navtitle: {textAlign: 'center', fontSize: 12, position: 'absolute', width: Util.size.width / 5, bottom: 10},
    navicon: {
        position: 'relative', width: 39, height: 39, top: -10
    }
});