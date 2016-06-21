/**
 * Created by slowsay on 16/6/12.
 */
'use struct';
import React,{Component} from 'react';
import {
    View,StyleSheet,Image,Text,TouchableHighlight,ScrollView,ListView
} from 'react-native';
/**
 *@desription 组件
 */
import Util from './../core/utils';
import HeadNavbar from './../component/navbar';

export default class extends Component {
    render() {
        const {title,navigator}=this.props;
        return (<View>
            <HeadNavbar title={title} navigator={navigator}/>
        </View>);
    }
}
