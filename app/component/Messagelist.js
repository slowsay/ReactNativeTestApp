/**
 * Created by slowsay on 16/6/17.
 */
'use struct';
import React,{Component} from 'react';
import {
    View,StyleSheet,Image,Text,TouchableHighlight,ScrollView,ListView
} from 'react-native';
/**
 *@desription 组件
 */
import Util from './../core/utils'
import HeadNavbar from './../component/navbar';
export  default class extends Component {
    constructor() {
        super();
        this.state = {
            data: new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2}).cloneWithRows([])
        }
    }

    _touchonPress() {

    }

    //listview列表
    _renderRow(data) {
        return (<TouchableHighlight onPress={()=>this._touchonPress()}>
            <View style={styles.Dlist}>
                <Image style={styles.Lcon} source={{uri: data.src}}/>
                <Text style={styles.Rcon}>{data.n}</Text>
            </View>
        </TouchableHighlight>)
    }

    render() {
        console.log('----------messagelist----------');
        const {title,navigator}=this.props;
        return (<View>
            <HeadNavbar title={title} navigator={navigator}/>
            <ScrollView style={styles.con}
                        automaticallyAdjustContentInsets={false}>
                <Text>test</Text>
            </ScrollView>
        </View>);
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})