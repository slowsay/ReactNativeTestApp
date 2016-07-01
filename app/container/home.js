/**
 * Created by slowsay on 16/6/3.
 */
'use struct';
import React,{Component} from 'react';
import {
    View,StyleSheet,Image,Text,TouchableHighlight,TouchableOpacity,ScrollView,ListView,Animated,RefreshControl
} from 'react-native';
/**
 *@description 组件
 */
import Util from './../core/utils';
import BrandMenu from './../component/brandmenu';
import Listpro from './../component/home/list';
import Storecon from './../component/store/content';
import BannerList from './../component/banner';
import Fansday from './../component/activity/fansday';
//brand list
import Tmall from './../tmall';
import Ju from './../ju';
import National from './../national';
import Waimai from './../waimai';
import Supermarket from './../supermarket';
import Recharge from './../recharge';
import Travel from './../travel';
import Getgold from './../getgold';
import Gohome from './../gohome';
import Categorys from './../category';
//首页主内容
export default class extends Component {
    constructor() {
        super();
        this.state = {
            isrefresh: false,
            fade: new Animated.Value(0)
        }
    };

    componentDidMount() {
        Animated.timing(this.state.fade, {toValue: 1, duration: 100}).start();
    }

    /**
     *@description 品牌点击
     */
    _getIcon(index, title) {
        let _comp = null;
        switch (index) {
            case 0:
                _comp = Tmall;
                break;
            case 1:
                _comp = Ju;
                break;
            case 2:
                _comp = National;
                break;
            case 3:
                _comp = Waimai;
                break;
            case 4:
                _comp = Supermarket;
                break;
            case 5:
                _comp = Recharge;
                break;
            case 6:
                _comp = Travel;
                break;
            case 7:
                _comp = Getgold;
                break;
            case 8:
                _comp = Gohome;
                break;
            case 9:
                _comp = Categorys;
                break;
        }
        const {navigator}=this.props;
        navigator.push({
            name: title,
            component: _comp,
            params: {
                title: title
            }
        });
    }

    /**
     *@description 首页=>向下接后,获取数据
     */
    _onRefresh() {
        Util.nslog('----------load data----------');
        let _this = this;
        this.setState({isrefresh: true});
        fetch('https://api.github.com/search/repositories?q=javascript&sort=stars', {}).then((res)=>res.text()).then((res)=> {
            //var data = JSON.parse(res);
            _this.setState({isrefresh: false});
        });
    }

    /**
     *@descrition 滚动触发事件
     */

    _onScroll() {
        Util.nslog('-------------onscroll---------------')
    }

    /**
     *@description 获取商品列表
     */
    _getList(index, title) {
        this.props.navigator.push({
            name: title,
            component: Storecon,
            params: {
                id: index
            }
        });
    }

    /**
     *@description 粉丝狂欢节
     */
    _fansDay() {
        this.props.navigator.push({
            name: '粉丝狂欢节',
            component: Fansday,
            params: {
                title: '粉丝狂欢节'
            }
        });
    }

    render() {
        Util.nslog('----------home----------');
        const {state}=this.props;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.con}
                            automaticallyAdjustContentInsets={false}
                            onScroll={()=>this._onScroll()}
                            scrollsToTop={true}
                            scrollEventThrottle={100}
                            refreshControl={<RefreshControl progressBackgroundColor="#ff0" refreshing={this.state.isrefresh}
                                onRefresh={()=>this._onRefresh()}/>}>
                    <BannerList state={state}/>
                    <BrandMenu getIcon={(index,title)=>this._getIcon(index,title)}/>
                    <TouchableOpacity onPress={()=>this._fansDay()}>
                        <Image style={styles.topt}
                               accessible={false}
                               source={{uri:'c3.png'}}/>
                    </TouchableOpacity>
                    <Listpro getList={(index,title)=>this._getList(index,title)}/>
                    <Animated.View style={[styles.bannerbox,{opacity:this.state.fade}]}>
                        <Image style={styles.banner} source={{uri: 'b0.png'}}/>
                    </Animated.View>
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
    bannerbox: {height: 204 * Util.size.width / 665 - 20},
    banner: {
        position: 'absolute',
        width: Util.size.width / 665 * 665,
        top: -20,
        height: 204 * Util.size.width / 665,
        margin: 0,
        padding: 0
    },
    con: {width: Util.size.width, height: Util.size.height - 110},
    icon: {
        width: 58, height: 58
    },
    topt: {
        width: Util.size.width / 750 * 750,
        height: 1128 * Util.size.width / 750
    }
});