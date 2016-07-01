/**
 * Created by slowsay on 16/6/27.
 */
'use struct';
import React,{Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import HeadNavbar from './../../component/navbar';
/**
 *@description 组件
 */
export default class extends Component {
    render() {
        const {title,navigator}=this.props;
        return (<View style={styles.container}>
            <HeadNavbar title={title} navigator={navigator}/>
            <Text>
                fansday!
            </Text>
        </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
