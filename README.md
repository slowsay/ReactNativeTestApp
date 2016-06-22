# ReactNativeTextApp
利用reactnative技术，开发，生成app
<p>
呵呵，再次拿淘宝手机端练手
</p>
<p>
不要关注，工程名，要关注reactnative，即带来方便，又有很多坑要填。</p>
<pre>
import React,{ Component } from 'react';
import {AppRegistry,
    StyleSheet,
    Text,Image,
    View,TabBarIOS,ListView
} from 'react-native';
import Util from './utils';
import Homeview from './view/home'
import Weitaoview from './view/weitao'
import Bbsview from './view/Bbs'
import Buyview from './view/Buys'
import Meview from './view/me'
//开始
class Fuckyou extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: '首页',
            Menus: [{n: '首页'}, {n: '微淘'}, {n: '社区'}, {n: '购物车'}, {n: '我的淘宝'}],
            weinotifCount: 1,
            homenotifCount: 0,
            presses: 0

        }
    }

    changeTab(str) {
        this.setState({selectedTab: str, notifcount: this.state.notifCount + 1, presses: this.state.presses + 1});
    }

    render() {
        return (
            <TabBarIOS tintColor="#fe5100" barTintColor="#c6d3db">
                <TabBarIOS.Item renderAsOriginal icon={{uri: 'm5.png',scale:5}} selectedIcon={{uri:'m5s.png',scale:5}}
                                title="首页" onPress={()=>this.changeTab('首页')}
                                badge={this.state.homenotifCount>0?this.state.homenotifCount:undefined}
                                selected={this.state.selectedTab==='首页'}>
                    <Homeview />
                </TabBarIOS.Item>
                <TabBarIOS.Item renderAsOriginal icon={{uri: 'm1.png',scale:5}} selectedIcon={{uri:'m1s.png',scale:5}}
                                title="微淘"
                                badge={this.state.weinotifCount>0?this.state.weinotifCount:undefined}
                                onPress={()=>this.changeTab('微淘')}
                                selected={this.state.selectedTab==='微淘'}>
                    <Weitaoview />
                </TabBarIOS.Item>
                <TabBarIOS.Item renderAsOriginal icon={{uri: 'm2.png',scale:5}} selectedIcon={{uri:'m2s.png',scale:5}}
                                title="社区"
                                onPress={()=>this.changeTab('社区')}
                                selected={this.state.selectedTab==='社区'}>
                    <Bbsview />
                </TabBarIOS.Item>
                <TabBarIOS.Item renderAsOriginal icon={{uri: 'm3.png',scale:5}} selectedIcon={{uri:'m3s.png',scale:5}}
                                title="购物车"
                                onPress={()=>this.changeTab('购物车')}
                                selected={this.state.selectedTab==='购物车'}>
                    <Buyview />
                </TabBarIOS.Item>
                <TabBarIOS.Item renderAsOriginal icon={{uri: 'm4.png',scale:5}} selectedIcon={{uri:'m4s.png',scale:5}}
                                title="我的淘宝"
                                onPress={()=>this.changeTab('我的淘宝')}
                                selected={this.state.selectedTab==='我的淘宝'}>
                    <Meview />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
AppRegistry.registerComponent('Fuckyou', () => Fuckyou);
</pre>
模拟测试app
<p>
<img src='http://slowsay.github.io/ReactNativeTestApp/test.gif' width='300' />
</p>
NPM
-----------------------
<pre>
step1 
npm install -g react-native-cli
step2
brew install watchman
step3
brew install flow
step4
npm init hello
step 5
react-native init 项目名称
step 6
npm start
</pre>

UPDATE
-----------------------
<pre>
*selectedIcon update:react.xcodeproj/react/views/RctTabbaritem.m
*Menulist update home.js
*ScrollView refreshControl update home.js
*about navigator or navigatorIOS 
*add video or image for launch image
</pre>

VERSION
-----------------------
<pre>
v1.0.0 update base
v1.0.1 update selectedIcon功能，用于tabbarios.item
v1.0.2 update 菜单列表排列 Image
v1.0.3 update scrollView 加载图标,页面切换
v1.0.4 update redux
v1.0.5 update launch video
</pre>
