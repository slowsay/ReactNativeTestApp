/**
 * Created by slowsay on 16/6/21.
 */
'use struct';
import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,Image,TouchableOpacity,Animated,RefreshControl,ActivityIndicatorIOS} from 'react-native';
/**
 *@description 组件
 */
import HeadNavbar from './../../component/headnavbar/';
import Util from './../../core/utils';
/**
 *@description 店铺
 */
export default class extends Component {
    constructor() {
        super();
        this.state = {
            isrefresh: false,
            isview: true,
            fade: new Animated.Value(0)
        }
    }

    /**
     *@descrition 滚动触发事件
     */
    _onRefresh() {
        let _this = this;
        this.setState({isrefresh: true});
        fetch('https://api.github.com/search/repositories?q=javascript&sort=stars').then((res)=>res.text()).then((res)=> {
            //var data = JSON.parse(res);
            _this.setState({isrefresh: false});
        });
    }

    _onScroll() {
        Util.nslog('-------------onscroll---------------');
    }

    _onload() {
        this.setState({isview: false});
        Animated.timing(this.state.fade, {toValue: 1}).start();
    }

    _shareHandle() {

    }

    render() {
        Util.nslog('----------store content----------');
        const {id,navigator,state}=this.props;
        return (<View style={styles.container}>
            <HeadNavbar title={''} navigator={navigator}/>
            <ScrollView automaticallyAdjustContentInsets={false}
                        onScroll={()=>this._onScroll()}
                        refreshControl={<RefreshControl progressBackgroundColor="#ff0" refreshing={this.state.isrefresh}
                                onRefresh={()=>this._onRefresh()}/>}>
                <View style={styles.picbox}>
                    <Animated.View style={[{opacity:this.state.fade}]}>
                        <Image onLoadEnd={()=>this._onload()} style={styles.pic}
                               source={{uri: state.storemsg[id].src}}/>
                    </Animated.View>
                    <ActivityIndicatorIOS animating={this.state.isview} style={styles.loading}></ActivityIndicatorIOS>
                    <View style={styles.con}>
                        <Text style={styles.titleL}> {state.storemsg[id].n}</Text>
                        <TouchableOpacity onPress={()=>this._shareHandle()}>
                            <Text style={styles.titleR}>分享</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View>

            </View>
        </View>);
    }
}
const styles = StyleSheet.create({
    container: {},
    picbox: {},
    pic: {
        width: Util.size.width / 614 * 614, height: Util.size.width / 614 * 614
    },
    con: {
        padding: 4
    }
});