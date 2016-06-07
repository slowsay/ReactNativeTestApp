/**
 * Created by slowsay on 16/6/3.
 */
import React,{Component} from 'react';
import {
    View,StyleSheet,Image,Text,TouchableHighlight,ScrollView,ListView,StatusBar,Animated,NavigatorIOS,RefreshControl
} from 'react-native';
import Util from './../utils'


//菜单列表
class Menulist extends Component {
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

//首页主内容
export default class extends Component {
    constructor() {
        super();
        this.state = {
            iconwidth: Util.size.width / 5,
            show: false,
            msg: '首页',
            isrefresh: false,
            fade: new Animated.Value(0),
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

    componentDidMount() {
        Animated.timing(this.state.fade, {toValue: 1, duration: 1000}).start();
    }

    _touchonPress() {
        console.log('fuck');
    };

    //listview列表
    _renderRow(data) {
        return <TouchableHighlight onPress={()=>this._touchonPress()}>
            <View style={styles.Dlist}>
                <Image style={styles.Lcon} source={{uri: data.src}}/>
                <Text style={styles.Rcon}>{data.n}</Text>
            </View>
        </TouchableHighlight>
    };

    _getIcon(index, title) {
        console.log(index, title);
    }


    _onRefresh() {
        this.setState({isrefresh: true});
        console.log('ok')
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.con}
                            refreshControl={<RefreshControl tintColor='#f0f' title='正在加载...' refreshing={this.state.isrefresh} onRefresh={()=>this._onRefresh} />}>
                    <Animated.View style={[styles.bannerbox,{opacity:this.state.fade}]}>
                        <Image style={styles.banner} source={{uri: 'b0.png'}}/>
                    </Animated.View>
                    <Menulist getIcon={(index,title)=>this._getIcon(index,title)}/>
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
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center', top: 60
    },
    loading: {
        position: "absolute",
        top: 0, left: 0,
        height: Util.size.height,
        width: Util.size.width,
        backgroundColor: "#1b95e0",
        alignItems: "center",
        justifyContent: "center"
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
    con: {width: Util.size.width, height: Util.size.height},
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