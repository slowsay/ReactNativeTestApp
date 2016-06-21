/**
 * Created by slowsay on 16/6/6.
 */
'use struct';
import React,{Component} from 'react';
import {
    View,StyleSheet,Image,Text,TouchableHighlight,ScrollView,ListView,TabBarIOS
} from 'react-native';
/**
 *@desription 组件
 */
import Util from './../core/utils'
import FriendsList from './../component/friendlist';
import MesasgeList from './../component/Messagelist'

export default class  extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: '消息',
        }
    }

    //触发并清右上红圈
    _changeTab(str) {
        this.setState({selectedTab: str});
    }

    render() {
        console.log('----------messagebox----------');
        const {navigator}=this.props;
        return (<TabBarIOS tintColor="#fe5100" barTintColor="#c6d3db">
            <TabBarIOS.Item icon={{uri: 'm0.png',scale:5}} selectedIcon={{uri:'m0s.png',scale:5}} title="消息"
                            onPress={()=>this._changeTab('消息')}
                            selected={this.state.selectedTab==='消息'}>
                <MesasgeList title='消息' navigator={navigator}/>
            </TabBarIOS.Item>
            <TabBarIOS.Item icon={{uri: 'm0.png',scale:5}} selectedIcon={{uri:'m0s.png',scale:5}} title="淘友"
                            onPress={()=>this._changeTab('淘友')}
                            selected={this.state.selectedTab==='淘友'}>
                <FriendsList title='淘友' navigator={navigator}/>
            </TabBarIOS.Item>
        </TabBarIOS>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});