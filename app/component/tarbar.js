/**
 * Created by slowsay on 16/6/15.
 */
'use strict';
import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,Image,
    View,TabBarIOS,ListView,PushNotificationIOS,TextInput,TouchableHighlight
} from 'react-native';
import Nbar from 'react-native-navbar';
import Homeview from './../container/home';
import Weitaoview from './../container/weitao';
import Bbsview from './../container/Bbs';
import Buyview from './../container/Buys';
import Meview from './../container/me';
import Util from './../core/utils';
import Searchtool from './indexsearch';
//消息列表
import Msgbox from './../component/messagebox';
//主标签菜单
export  default class extends Component {
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

        };
    }

    //通知标识
    changeTab(str) {
        console.log('----------通知标识----------');
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
    _showMsg() {
        this.props.navigator.push({
            name: '消息',
            component: Msgbox,
            params: {
                msg: '消息'
            }
        })
        ;
    }

    /**
     *@decription 底部四个菜单
     */
    render() {
        console.log('----------tarbar----------');
        const {navigator}=this.props;
        return (
            <TabBarIOS tintColor="#fe5100" barTintColor="#c6d3db">
                <TabBarIOS.Item icon={{uri: 'm0.png',scale:5}} selectedIcon={{uri:'m0s.png',scale:5}}
                                title="首页" onPress={()=>this.changeTab('首页')}
                                badge={this.state.homenotifCount>0?this.state.homenotifCount:undefined}
                                selected={this.state.selectedTab==='首页'}>
                    <View style={styles.container}>
                        <Searchtool showmsg={()=>this._showMsg()}/>
                        <Homeview navigator={navigator}/>
                        <TouchableHighlight style={styles.topng}>
                            <Image style={styles.icon} source={{uri:'top.png'}}/>
                        </TouchableHighlight>
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
                    <Meview/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topng: {
        position: 'absolute',
        bottom: 60, right: 20
    },
    icon: {
        width: 36, height: 36
    }
});