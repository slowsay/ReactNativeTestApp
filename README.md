# ReactNativeTextApp

> 以淘宝手机端作为参考,利用reactnative技术，从建立项目平台,过程开发，最后生成app.

> 经过几段碎片时间,对rn的研究,发现确实蛮不错的一款前端编译oc的框架,确实降低对于前端去开发app的难易程序.

> 本demo,还有几个版本,只是对当下的一些记录与分享。

> 此外还正式上线了一款,简易的ios app应用——"啊呀share",里面添加热更新应用!

> 在对于细小的改动,以减少审核时间,帮助了不少,同时对oc的语法更近一步的了解与掌握,花点时间基本能掌握基础!

```
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
```

### 模拟测试app

<pre>
<img src='http://slowsay.github.io/ReactNativeTestApp/test.gif' width='300' />
</pre>

## Install

step1
```
npm install -g react-native-cli
```

step2
```
brew install watchman
```
step3
```
brew install flow
```
step4
```
npm init hello
```
step5
```
react-native init 项目名称
```
step6
```
npm start
```
step7
```
react-native bundle --entry-file ./index.js --bundle-output ./ios/index.jsbundle
```

```
[1:14:32 PM] <START> Building Dependency Graph
[1:14:32 PM] <START> Crawling File System
[1:14:33 PM] <START> find dependencies
[1:14:37 PM] <END>   Crawling File System (4648ms)
[1:14:37 PM] <START> Building in-memory fs for JavaScript
[1:14:37 PM] <END>   Building in-memory fs for JavaScript (340ms)
[1:14:37 PM] <START> Building in-memory fs for Assets
[1:14:38 PM] <END>   Building in-memory fs for Assets (209ms)
[1:14:38 PM] <START> Building Haste Map
[1:14:38 PM] <START> Building (deprecated) Asset Map
[1:14:38 PM] <END>   Building (deprecated) Asset Map (89ms)
[1:14:38 PM] <END>   Building Haste Map (371ms)
[1:14:38 PM] <END>   Building Dependency Graph (5597ms)
transformed 677/677 (100%)
[1:14:39 PM] <END>   find dependencies (6237ms)
bundle: start
bundle: finish
bundle: Writing bundle output to: ./ios/index.jsbundle
bundle: Done writing bundle output
Assets destination folder is not set, skipping...
```

说明打包成功了，可以发布到appstore

## Update

* selectedIcon update:react.xcodeproj/react/views/RctTabbaritem.m

* Menulist update home.js

* ScrollView refreshControl update home.js

* about navigator or navigatorIOS

* add video or image for launch image

* package app for appstore

* about navigator props issue

```
<Component {...route.params} route={route} state={state} actions={actions} navigator={navigator}/>;
```

* have blank page ,so view's style width,height need by set

* homepage searchbar

* navigator.push page currentpage:
```
style {width: Util.size.width, height: Util.size.height, backgroundColor: '#fff'}
```
* add storeshopping page


## Version

v1.0.0 update base

v1.0.1 update selectedIcon功能，用于tabbarios.item

v1.0.10001 update 菜单列表排列 Image

v1.0.3 update scrollView 加载图标,页面切换

v1.0.4 update redux

v1.0.5 update launch video

