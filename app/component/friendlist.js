/**
 * Created by slowsay on 16/6/17.
 */
import React,{Component} from 'react';
import {
    View,StyleSheet,Image,Text,TouchableOpacity,ScrollView,ListView,TabBarIOS
} from 'react-native';
/**
 *@desription 组件
 */
import Util from './../core/utils'
import HeadNavbar from './../component/navbar';
export default class extends Component {
    constructor() {
        super();
        let arr = [{
            n: 'jack',
            src: 'pic0.png'
        }, {n: 'list', src: 'pic1.png'}, {n: 'list', src: 'pic2.png'}, {
            n: 'jack',
            src: 'pic0.png'
        }, {n: 'list', src: 'pic1.png'}, {n: 'list', src: 'pic2.png'}, {
            n: 'jack',
            src: 'pic0.png'
        }, {n: 'list', src: 'pic1.png'}, {n: 'list', src: 'pic2.png'}, {
            n: 'jack',
            src: 'pic0.png'
        }, {n: 'list', src: 'pic1.png'}, {n: 'list', src: 'pic2.png'}];
        this.state = {
            data: new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2}).cloneWithRows(arr)
        }
    }

    _touchonPress() {
        Util.nslog('fuck');
    };

    //listview列表
    _renderRow(data) {
        return <TouchableOpacity onPress={()=>this._touchonPress()}>
            <View style={styles.Dlist}>
                <Image style={styles.Lcon} source={{uri: data.src}}/>
                <View style={styles.Rcon}>
                    <Text>{data.n}</Text>
                </View>
            </View>
        </TouchableOpacity>
    };

    render() {
        Util.nslog('----------friendlist----------');
        const {title,navigator}=this.props;
        return (<View>
            <HeadNavbar title={title} navigator={navigator}/>
            <ScrollView style={styles.con} automaticallyAdjustContentInsets={false}>
                <ListView dataSource={this.state.data}
                          renderRow={(data)=>this._renderRow(data)}/>
            </ScrollView>
        </View>);
    }
}

const styles = ({
    con: {flex: 1, width: Util.size.width, height: Util.size.height - 110},
    Dlist: {flexDirection: 'row', padding: 10},
    Lcon: {
        width: 29, height: 29
    },
    Rcon: {
        width: Util.size.width - 30, padding: 5,
        paddingLeft: 10, borderBottomWidth: 1, borderBottomColor: '#d8d8d8'
    },
    navbar: {width: Util.size.width, borderBottomWidth: 1, borderBottomColor: '#d8d8d8'}
})