/**
 * Created by slowsay on 16/6/21.
 */
'use struct';
import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,Image,TouchableHighlight} from 'react-native';
/**
 *@description 组件
 */
import HeadNavbar from './../../component/headnavbar/';
/**
 *@description 店铺
 */
export default class extends Component {

    render() {
        console.log('----------store content----------');
        const {id,navigator}=this.props;
        return (<View style={styles.container}>
            <HeadNavbar title={''} navigator={navigator}/>
            <ScrollView>

            </ScrollView>
            <View>

            </View>
        </View>);
    }
}
const styles = StyleSheet.create({
    container: {flex: 1}
});