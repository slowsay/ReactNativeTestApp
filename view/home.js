/**
 * Created by slowsay on 16/6/3.
 */
import React,{Component} from 'react';
import {
    View,StyleSheet,Image,Text,TouchableHighlight,ScrollView,TextInput,ListView
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
//菜单列表
class Menulist extends Component {
    constructor() {
        super();
        this.state = {
            len: 5,
            width: Util.size.width / 5,
            selected: 14,
            list: [{n: '天猫', src: '0.png'}, {n: '聚划算', src: '1.png'}, {n: '天猫国际', src: '2.png'}, {
                n: '外卖',
                src: '3.png'
            }, {n: '天猫超市', src: '4.png'}, {n: '充值中心', src: '5.png'}, {n: '阿里旅行', src: '6.png'}, {
                n: '领金币',
                src: '7.png'
            }, {n: '到家', src: '8.png'}, {n: '分类', src: '9.png'}]
        }
    }

    _onPressButton() {

    }

    listMap(e, i) {
        let top = Math.floor(i / this.state.len) * this.state.width;
        let left = (i % this.state.len) * this.state.width;
        console.log(top, left);
        return (
            <View style={[styles.navboxlist,{top,left}]} key={i}>
                <View style={styles.navboxc}>
                    <Image style={styles.navicon} source={{uri:e.src}}/>
                    <Text style={styles.navtitle}>{e.n}</Text>
                </View>
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
export default class extends Component {
    constructor() {
        super();
        this.state = {
            iconwidth: Util.size.width / 5,
            msg: '首页',
            data: new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2}).cloneWithRows([{
                n: 'jack',
                src: 'round.png'
            }, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}, {
                n: 'list',
                src: 'round.png'
            }, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}, {
                n: 'list',
                src: 'round.png'
            }, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}, {
                n: 'list',
                src: 'round.png'
            }, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}, {
                n: 'list',
                src: 'round.png'
            }, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}])
        }
    };

    _onPressButton() {
        console.log('ok');
    };

    _touchonPress() {
        console.log('fuck');
    };

    //listview列表
    _renderRow(data) {
        return <TouchableHighlight onPress={()=>this._touchonPress()}>
            <View style={styles.Dlist}>
                <Image style={styles.Lcon} source={{uri:data.src}}/>
                <Text style={styles.Rcon}>{data.n}</Text>
            </View>
        </TouchableHighlight>
    };

    render() {
        return (
            <View style={styles.container}>
                <Searchtool />
                <ScrollView style={styles.con}>
                    <View style={styles.bannerbox}>
                        <Image style={styles.banner} source={{uri:'b0.png'}}/>
                    </View>
                    <Menulist />
                    <ListView dataSource={this.state.data}
                              renderRow={(data)=>this._renderRow(data)}/>
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
        backgroundColor: '#fe4400'
    },
    inputbox: {
        position: 'absolute', left: 50, color: '#fff', fontSize: 12, padding: 4, paddingLeft: 20,
        height: 30, width: Util.size.width - 100, backgroundColor: '#d42d00'
    }
    ,
    searchbox: {
        position: 'absolute',
        width: Util.size.width, height: 60, top: 20
    },
    bannerbox: {height: 204 * Util.size.width / 665 - 20},
    banner: {
        position: 'absolute',
        width: Util.size.width / 665 * 665,
        top: -20,
        height: 204 * Util.size.width / 665,
        margin: 0,
        padding: 0
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
    },
    Dlist: {flexDirection: 'row', padding: 10, backgroundColor: '#f0f0f0'},
    Lcon: {
        width: 29, height: 29
    },
    Rcon: {
        paddingLeft: 10
    },
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