/**
 * Created by slowsay on 16/6/13.
 */
'use strict';
import React,{ Component } from 'react';
import {AppRegistry,
    StyleSheet,
    Text,Image,
    View,TabBarIOS,ListView,StatusBar,NavigatorIOS,Navigator,TextInput,TouchableHighlight,PushNotificationIOS,AlertIOS
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Util from './../core/utils';
import Homeview from './view/home';
import Weitaoview from './view/weitao';
import Bbsview from './view/Bbs';
import Buyview from './view/Buys';
import Meview from './view/me';
import Msgbox from './view/messagebox';
import * as filmsActions from './../actions/films';

//搜索框
class Searchtool extends Component {
    constructor() {
        super();
        this.state = {
            msg: '移动流量'
        };
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
                <TouchableHighlight activeOpacity={1} onPress={()=>this.props.showmsg()}>
                    <Image style={styles.rightmsg} source={{uri:'msg.png'}}/>
                </TouchableHighlight>
            </View>
        );
    }
}
//主标签菜单
class Tarbars extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: '首页',
            Menus: [{n: '首页', icon: 'm0', sicon: 'm0s', component: Homeview}, {
                n: '微淘',
                component: Weitaoview, icon: 'm1', sicon: 'm1s'
            }, {n: '社区', component: Bbsview, icon: 'm2', sicon: 'm2s'}, {
                n: '购物车',
                component: Buyview,
                icon: 'm3',
                sicon: 'm3s'
            }, {n: '我的淘宝', component: Meview, icon: 'm4', sicon: 'm4s'}],
            weinotifCount: 5,
            homenotifCount: 0,
            presses: 0

        }
    }

    componentDidMount() {
        Util.ajax({
            url: 'https://api.github.com/search/repositories?q=javascript&sort=stars',
            success: function (e) {
                //let data = JSON.stringify(e);
                //AlertIOS.alert('msg', data);
            },
            error: function (e) {
                console.log('error:', e);
            }
        })
    }

    //触发并清右上红圈
    changeTab(str) {
        this.setState({selectedTab: str});
        var _this = this;
        this.state.Menus.map(function (e, i) {
            if (i == 0)
                _this.setState({homenotifCount: 0});
            else if (i == 1) {
                _this.setState({weinotifCount: 0});
                PushNotificationIOS.setApplicationIconBadgeNumber(0);
            }
        });
    }

    //显示信息
    _showMsg(index) {
        this.props.navigator.push({
            title: '消息',
            component: Msgbox,
            navigationBarHidden: false
        });
    }

    render() {
        return (
            <TabBarIOS tintColor="#fe5100" barTintColor="#c6d3db">
                <TabBarIOS.Item icon={{uri: 'm0.png',scale:5}} selectedIcon={{uri:'m0s.png',scale:5}}
                                title="首页" onPress={()=>this.changeTab('首页')}
                                badge={this.state.homenotifCount>0?this.state.homenotifCount:undefined}
                                selected={this.state.selectedTab==='首页'}>
                    <View style={styles.container}>
                        <Searchtool showmsg={()=>this._showMsg()}/>
                        <Homeview />
                    </View>
                </TabBarIOS.Item>
                <TabBarIOS.Item icon={{uri: 'm5.png',scale:5}} selectedIcon={{uri:'m5s.png',scale:5}}
                                title="微淘" onPress={()=>this.changeTab('微淘')}
                                badge={this.state.weinotifCount>0?this.state.weinotifCount:undefined}
                                selected={this.state.selectedTab==='微淘'}>
                    <Weitaoview />
                </TabBarIOS.Item>
                <TabBarIOS.Item icon={{uri: 'm2.png',scale:5}} selectedIcon={{uri:'m2s.png',scale:5}}
                                title="社区"
                                onPress={()=>this.changeTab('社区')}
                                selected={this.state.selectedTab==='社区'}>
                    <Bbsview />
                </TabBarIOS.Item>
                <TabBarIOS.Item icon={{uri: 'm3.png',scale:5}} selectedIcon={{uri:'m3s.png',scale:5}}
                                title="购物车"
                                onPress={()=>this.changeTab('购物车')}
                                selected={this.state.selectedTab==='购物车'}>
                    <Buyview />
                </TabBarIOS.Item>
                <TabBarIOS.Item icon={{uri: 'm4.png',scale:5}} selectedIcon={{uri:'m4s.png',scale:5}}
                                title="我的淘宝"
                                onPress={()=>this.changeTab('我的淘宝')}
                                selected={this.state.selectedTab==='我的淘宝'}>
                    <Meview />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
export default class extends Component {
    render() {
        return (
            <NavigatorIOS style={styles.container}
                          initialRoute={{title:'欢迎页',backButtonTitle: ' ',component:Tarbars,navigationBarHidden:true}}/>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
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