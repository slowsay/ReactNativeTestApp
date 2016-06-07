/**
 * Created by slowsay on 16/6/6.
 */
import React,{Component} from 'react';
import {
    View,StyleSheet,Image,Text,TouchableHighlight,ScrollView,TextInput,ListView,StatusBar,Animated,NavigatorIOS,TabBarIOS
} from 'react-native';
import Util from './../utils'

class MsgList extends Component {
    render() {
        return (<View style={styles.container}>
            <ScrollView style={styles.con}>
                <Text>message</Text>
            </ScrollView>
        </View>);
    }

}
class FirendsList extends Component {
    constructor() {
        super();
        this.state = {
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

    render() {
        return (<View style={styles.container}>
            <ScrollView style={styles.con}>
                <ListView dataSource={this.state.data}
                          renderRow={(data)=>this._renderRow(data)}/>
            </ScrollView>
        </View>);
    }
}

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
        return (<TabBarIOS tintColor="#fe5100" barTintColor="#c6d3db">
            <TabBarIOS.Item icon={{uri: 'm0.png',scale:5}} selectedIcon={{uri:'m0s.png',scale:5}} title="消息"
                            onPress={()=>this._changeTab('消息')}
                            selected={this.state.selectedTab==='消息'}>
                <MsgList />
            </TabBarIOS.Item>
            <TabBarIOS.Item icon={{uri: 'm0.png',scale:5}} selectedIcon={{uri:'m0s.png',scale:5}} title="淘友"
                            onPress={()=>this._changeTab('淘友')}
                            selected={this.state.selectedTab==='淘友'}>
                <FirendsList />
            </TabBarIOS.Item>
        </TabBarIOS>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, con: {width: Util.size.width, height: Util.size.height - 60, backgroundColor: '#fff'}
});